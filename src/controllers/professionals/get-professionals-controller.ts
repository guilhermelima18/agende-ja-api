import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { GetProfessionalsService } from "../../services/professionals/get-professionals-service";

const getProfesionalsSchema = z.object({
  companyId: z.string(),
});

class GetProfessionalsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    let id;
    try {
      const { companyId } = getProfesionalsSchema.parse(request.query);
      id = companyId;
    } catch (error) {
      throw new Error("ID da empresa é obrigatório");
    }

    const professionalsService = new GetProfessionalsService();
    const professionals = await professionalsService.execute({
      companyId: id,
    });

    return reply.code(200).send({ data: professionals });
  }
}

export { GetProfessionalsController };
