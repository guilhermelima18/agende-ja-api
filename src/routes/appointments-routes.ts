import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { GetAppointmentsController } from "../controllers/appointments/get-appointments-controller";
import { CreateAppointmentsController } from "../controllers/appointments/create-appointments-controller";

export async function appointmentsRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/appointments",
    (request: FastifyRequest, reply: FastifyReply) => {
      const appointmentsController = new GetAppointmentsController();
      return appointmentsController.handle(request, reply);
    }
  );

  fastify.post(
    "/appointments",
    (request: FastifyRequest, reply: FastifyReply) => {
      const appointmentsController = new CreateAppointmentsController();
      return appointmentsController.handle(request, reply);
    }
  );
}
