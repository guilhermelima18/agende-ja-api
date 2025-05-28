import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { GetAppointmentsService } from "../../services/appointments/get-appointments-service";

const getAppointmentsSchema = z.object({
  professionalId: z.string().optional(),
  companyId: z.string(),
});

class GetAppointmentsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { data } = getAppointmentsSchema.safeParse(request.query);

      if (!data?.companyId || !data.professionalId) {
        return reply
          .code(400)
          .send({ error: "professionalId ou companyId são obrigatórios." });
      }

      const appointmentsService = new GetAppointmentsService();
      const appointments = await appointmentsService.execute({
        professionalId: data.professionalId,
        companyId: data.companyId,
      });

      return reply.code(200).send({ data: appointments });
    } catch (error) {
      return reply.code(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { GetAppointmentsController };
