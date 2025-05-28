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
    try {
      const { success, data } = createAppointmentsSchema.safeParse(
        request.body
      );

      if (!success) {
        return reply.code(400).send({
          error: "Existem campos obrigatórios que não foram passados.",
        });
      }

      const appointmentService = new CreateAppointmentsService();
      const appointment = await appointmentService.execute({
        userId: data.userId,
        serviceId: data.serviceId,
        professionalId: data.professionalId,
        companyId: data.companyId,
        status: data.status,
        scheduledAt: data.scheduledAt,
      });

      return reply.code(201).send({ data: appointment });
    } catch (error) {
      return reply.code(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { CreateAppointmentsController };
