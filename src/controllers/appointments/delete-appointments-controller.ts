import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

import { DeleteAppointmentsService } from "../../services/appointments/delete-appointments-service";

const deleteAppointmentsSchema = z.object({
  appointmentId: z.string(),
});

class DeleteAppointmentsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const parsedParams = deleteAppointmentsSchema.safeParse(request.params);

      if (!parsedParams.success) {
        return reply
          .status(400)
          .send({ error: "ID do agendamento é obrigatório." });
      }

      const appointmentService = new DeleteAppointmentsService();
      const appointment = await appointmentService.execute({
        appointmentId: parsedParams.data.appointmentId,
      });

      return reply.code(200).send({ data: appointment });
    } catch (error) {
      return reply.code(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { DeleteAppointmentsController };
