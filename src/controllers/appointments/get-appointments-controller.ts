import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { GetAppointmentsService } from "../../services/appointments/get-appointments-service";

const getAppointmentsSchema = z.object({
  professionalId: z.string().optional(),
  companyId: z.string(),
  userId: z.string().optional(),
});

class GetAppointmentsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { success, data } = getAppointmentsSchema.safeParse(request.query);

      if (!success) {
        return reply.code(400).send({ error: "companyId são obrigatórios." });
      }

      const appointmentsService = new GetAppointmentsService();
      const appointments = await appointmentsService.execute({
        professionalId: data.professionalId,
        companyId: data.companyId,
        userId: data.userId,
      });

      return reply.code(200).send({ data: appointments });
    } catch (error) {
      return reply.code(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { GetAppointmentsController };
