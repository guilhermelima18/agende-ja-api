import { FastifyReply, FastifyRequest } from "fastify";
import { GetUserService } from "../../services/users/get-user-service";

class GetUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const userService = new GetUserService();
    const users = await userService.execute();

    return reply.status(200).send({ data: users });
  }
}

export { GetUserController };
