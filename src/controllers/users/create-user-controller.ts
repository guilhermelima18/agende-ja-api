import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserService } from "../../services/users/create-user-service";
import { z } from "zod";

const createUserSchema = z.object({
  role: z.string(),
  name: z.string({ required_error: "Nome é um campo obrigatório" }),
  email: z
    .string({ required_error: "E-mail é um campo obrigatório" })
    .email("E-mail inválido"),
  phoneNumber: z.string({ required_error: "Celular é um campo obrigatório" }),
  dateOfBirth: z.string({
    required_error: "Data de nascimento é um campo obrigatório",
  }),
});

class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { role, name, email, phoneNumber, dateOfBirth } =
      createUserSchema.parse(request.body);

    const userService = new CreateUserService();
    const user = await userService.execute({
      role,
      name,
      email,
      phoneNumber,
      dateOfBirth,
    });

    return reply.status(201).send({ data: user });
  }
}

export { CreateUserController };
