import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { GetProfessionalsController } from "../controllers/professionals/get-professionals-controller";
import { CreateProfessionalsController } from "../controllers/professionals/create-professionals-controller";

export async function professionalsRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/professionals",
    (request: FastifyRequest, reply: FastifyReply) => {
      const professionalsServices = new GetProfessionalsController();
      return professionalsServices.handle(request, reply);
    }
  );

  fastify.post(
    "/professionals",
    (request: FastifyRequest, reply: FastifyReply) => {
      const professionalsController = new CreateProfessionalsController();
      return professionalsController.handle(request, reply);
    }
  );
}
