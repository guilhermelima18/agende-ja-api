import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { AuthController } from "../controllers/auth/auth-controller";

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/sign-in", (request: FastifyRequest, reply: FastifyReply) => {
    const authController = new AuthController();
    return authController.handle(request, reply);
  });
}
