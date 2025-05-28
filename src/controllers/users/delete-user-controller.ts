import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

import { DeleteUserService } from "../../services/users/delete-user-service";

const deleteUserSchema = z.object({
  userId: z.string(),
});

class DeleteUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { success, data } = deleteUserSchema.safeParse(request.params);

      if (!success) {
        return reply.code(400).send({ error: "userId é obrigatório." });
      }

      const userService = new DeleteUserService();
      const userDeleted = await userService.execute({ userId: data.userId });

      return reply.code(200).send({ data: { id: userDeleted } });
    } catch (error) {
      return reply.code(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { DeleteUserController };
