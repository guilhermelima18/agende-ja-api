import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { GetUserController } from "../controllers/users/get-user-controller";
import { CreateUserController } from "../controllers/users/create-user-controller";
import { UpdateUserController } from "../controllers/users/update-user-controller";
import { DeleteUserController } from "../controllers/users/delete-user-controller";

export async function usersRoutes(fastify: FastifyInstance) {
  fastify.get("/users", (request: FastifyRequest, reply: FastifyReply) => {
    const userController = new GetUserController();
    return userController.handle(request, reply);
  });

  fastify.post("/users", (request: FastifyRequest, reply: FastifyReply) => {
    const userController = new CreateUserController();
    return userController.handle(request, reply);
  });

  fastify.put("/users/:id", (request: FastifyRequest, reply: FastifyReply) => {
    const userController = new UpdateUserController();
    return userController.handle(request, reply);
  });

  fastify.delete(
    "/users/:id",
    (request: FastifyRequest, reply: FastifyReply) => {
      const userController = new DeleteUserController();
      return userController.handle(request, reply);
    }
  );
}
