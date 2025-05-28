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
      const {
        role,
        name,
        email,
        password,
        phoneNumber,
        dateOfBirth,
        companyId,
      } = createUserSchema.parse(request.body);

      const userService = new CreateUserService();
      const user = await userService.execute({
        role,
        name,
        email,
        password,
        phoneNumber,
        dateOfBirth,
        companyId,
      });

      return reply.status(201).send({ data: user });
    } catch (error: any) {
      console.log(error);

      if (error.message === "Já existe um usuário com esse e-mail!") {
        return reply.status(400).send({ error: error.message });
      }

      return reply.status(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { CreateUserController };
