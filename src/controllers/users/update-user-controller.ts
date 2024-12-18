import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { UpdateUserService } from "../../services/users/update-user-service";

interface UpdateUserParams {
  id: string;
}

const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
});

class UpdateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as UpdateUserParams;
    const { name, email, phoneNumber } = updateUserSchema.parse(request.body);
    const userService = new UpdateUserService();

    if (!id) {
      throw new Error("ID é obrigatório!");
    }

    const userUpdate = await userService.execute({
      id,
      name,
      email,
      phoneNumber,
    });

    return reply.code(200).send({ data: userUpdate });
  }
}

export { UpdateUserController };
