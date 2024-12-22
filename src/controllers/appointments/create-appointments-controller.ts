import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateAppointmentsService } from "../../services/appointments/create-appointments-service";

const createAppointmentsSchema = z.object({
  userId: z.string(),
  serviceId: z.string(),
  professionalId: z.string(),
  companyId: z.string(),
  status: z.enum(["PENDING", "CONFIRMED", "CANCELED"]),
  scheduledAt: z.string(),
});

class CreateAppointmentsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {
      userId,
      serviceId,
      professionalId,
      companyId,
      status,
      scheduledAt,
    } = createAppointmentsSchema.parse(request.body);

    const appointmentService = new CreateAppointmentsService();
    const appointment = await appointmentService.execute({
      userId,
      serviceId,
      professionalId,
      companyId,
      status,
      scheduledAt,
    });

    return reply.code(201).send({ data: appointment });
  }
}

export { CreateAppointmentsController };
