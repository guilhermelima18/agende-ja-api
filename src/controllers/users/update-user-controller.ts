import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { UpdateUserService } from "../../services/users/update-user-service";

interface UpdateUserParams {
  userId: string;
}

const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
});

class UpdateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { userId } = request.params as UpdateUserParams;
      const { success, data } = updateUserSchema.safeParse(request.body);

      if (!userId) {
        return reply.code(400).send({ error: "userId é obrigatório" });
      }

      if (!success) {
        return reply
          .code(400)
          .send({ error: "Campos obrigatórios não foram passados." });
      }

      const userService = new UpdateUserService();
      const userUpdate = await userService.execute({
        id: userId,
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
      });

      return reply.code(200).send({ data: userUpdate });
    } catch (error: any) {
      if (error.message === "Usuário não existe!") {
        return reply.code(400).send({ error: error.message });
      }

      return reply.code(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { UpdateUserController };
