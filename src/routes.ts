import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { GetUserController } from "./controllers/users/get-user-controller";
import { CreateUserController } from "./controllers/users/create-user-controller";

export async function routes(fastify: FastifyInstance) {
  fastify.get("/users", (request: FastifyRequest, reply: FastifyReply) => {
    const userController = new GetUserController();
    return userController.handle(request, reply);
  });

  fastify.post("/users", (request: FastifyRequest, reply: FastifyReply) => {
    const userController = new CreateUserController();
    return userController.handle(request, reply);
  });
}
