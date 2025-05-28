import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

import { UpdateAppointmentsService } from "../../services/appointments/update-appointments-service";

const updateAppointmentsSchema = z.object({
  appointmentId: z.string(),
});

class UpdateAppointmentsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { success, data } = updateAppointmentsSchema.safeParse(
        request.params
      );

      if (!success) {
        return reply.code(400).send({ error: "appointmentId é obrigatório." });
      }

      const appointmentService = new UpdateAppointmentsService();
      const appointment = await appointmentService.execute({
        appointmentId: data.appointmentId,
      });

      return reply.code(200).send({ data: appointment });
    } catch (error) {
      return reply.code(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { UpdateAppointmentsController };
