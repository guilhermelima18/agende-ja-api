import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserService } from "../../services/users/create-user-service";
import { z } from "zod";

const createUserSchema = z.object({
  role: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phoneNumber: z.string(),
  dateOfBirth: z.string(),
  companyId: z.string(),
});

class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { success, data } = createUserSchema.safeParse(request.body);

      if (!success) {
        return reply
          .code(400)
          .send({ error: "Campos obrigatórios não foram passados." });
      }

      const userService = new CreateUserService();
      const user = await userService.execute({
        role: data.role,
        name: data.name,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
        dateOfBirth: data.dateOfBirth,
        companyId: data.companyId,
      });

      return reply.status(201).send({ data: user });
    } catch (error: any) {
      if (error.message === "Já existe um usuário com esse e-mail!") {
        return reply.status(400).send({ error: error.message });
      }

      return reply.status(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { CreateUserController };
