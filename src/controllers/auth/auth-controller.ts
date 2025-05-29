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
      const { success, data } = authSchema.safeParse(request.body);

      if (!success) {
        return reply
          .code(400)
          .send({ error: "E-mail e/ou password são obrigatórios." });
      }

      const authService = new AuthService();
      const userAuth = await authService.execute({
        email: data.email,
        password: data.password,
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
