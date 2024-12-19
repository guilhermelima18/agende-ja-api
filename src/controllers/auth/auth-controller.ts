import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { AuthService } from "../../services/auth/auth-service";

const authSchema = z.object({
  email: z.string({ required_error: "E-mail é obrigatório" }).email(),
  password: z.string({ required_error: "Senha é obrigatório" }),
});

class AuthController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = authSchema.parse(request.body);

    const authService = new AuthService();
    const userAuth = await authService.execute({
      email,
      password,
    });

    return reply.code(200).send({ data: userAuth });
  }
}

export { AuthController };
