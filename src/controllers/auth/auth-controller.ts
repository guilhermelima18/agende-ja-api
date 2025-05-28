import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { AuthService } from "../../services/auth/auth-service";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

class AuthController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { email, password } = authSchema.parse(request.body);

      const authService = new AuthService();
      const userAuth = await authService.execute({
        email,
        password,
      });

      return reply.code(200).send({ data: userAuth });
    } catch (error: any) {
      console.log(error);

      if (error.message === "Usuário e/ou senha incorretos!") {
        return reply.status(400).send({ error: error.message });
      }

      return reply.status(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { AuthController };
