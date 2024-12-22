import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { GetAppointmentsService } from "../../services/appointments/get-appointments-service";

const getAppointmentsSchema = z.object({
  professionalId: z.string(),
  companyId: z.string(),
});

class GetAppointmentsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    let id_empresa, id_profissional;

    try {
      const { professionalId, companyId } = getAppointmentsSchema.parse(
        request.query
      );
      id_profissional = professionalId;
      id_empresa = companyId;
    } catch (error) {
      throw new Error("ID do profissional e da empresa são obrigatórios!");
    }

    const appointmentsService = new GetAppointmentsService();
    const appointments = await appointmentsService.execute({
      professionalId: id_profissional,
      companyId: id_empresa,
    });

    return reply.code(200).send({ data: appointments });
  }
}

export { GetAppointmentsController };
