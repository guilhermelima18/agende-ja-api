import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { GetProfessionalsService } from "../../services/professionals/get-professionals-service";

const getProfesionalsSchema = z.object({
  companyId: z.string(),
});

class GetProfessionalsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const parsedQuery = getProfesionalsSchema.safeParse(request.query);

      if (!parsedQuery.success) {
        return reply
          .status(400)
          .send({ error: "ID da empresa é obrigatório." });
      }

      const professionalsService = new GetProfessionalsService();
      const professionals = await professionalsService.execute({
        companyId: parsedQuery?.data?.companyId,
      });

      return reply.code(200).send({ data: professionals });
    } catch (error: any) {
      console.log(error);

      return reply.status(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { GetProfessionalsController };
