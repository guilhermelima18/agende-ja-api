import { FastifyReply, FastifyRequest } from "fastify";
import { GetUserService } from "../../services/users/get-user-service";
import { z } from "zod";

const getUserSchema = z.object({
  companyId: z.string(),
});

class GetUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { success, data } = getUserSchema.safeParse(request.query);

      if (!success) {
        return reply.code(400).send({ error: "companyId é obrigatório." });
      }

      const userService = new GetUserService();
      const users = await userService.execute({ companyId: data.companyId });

      return reply.status(200).send({ data: users });
    } catch (error) {
      return reply.status(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { GetUserController };
