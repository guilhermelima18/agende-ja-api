import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteUserService } from "../../services/users/delete-user-service";

interface DeleteUserParams {
  id: string;
}

class DeleteUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as DeleteUserParams;

    const userService = new DeleteUserService();

    if (!id) {
      throw new Error("ID é obrigatório!");
    }

    const userDeleted = await userService.execute({ id });

    return reply.code(200).send({ data: { id: userDeleted } });
  }
}

export { DeleteUserController };
