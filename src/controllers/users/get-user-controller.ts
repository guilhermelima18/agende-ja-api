import { FastifyReply, FastifyRequest } from "fastify";
import { GetUserService } from "../../services/users/get-user-service";

class GetUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const userService = new GetUserService();
    const user = await userService.execute();

    return reply.status(200).send({ user });
  }
}

export { GetUserController };
