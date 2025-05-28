import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateCompanyServicesService } from "../../services/company-services/create-company-services-service";

const createCompanyServicesSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  duration: z.number(),
  price: z.coerce.number(),
  companyId: z.string(),
});

class CreateCompanyServicesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { success, data } = createCompanyServicesSchema.safeParse(
        request.body
      );

      if (!success) {
        return reply
          .code(400)
          .send({ error: "Campos obrigatórios não foram passados." });
      }

      const companyService = new CreateCompanyServicesService();

      const service = await companyService.execute({
        name: data.name,
        description: data.description,
        duration: data.duration,
        price: data.price,
        companyId: data.companyId,
      });

      return reply.code(201).send({ data: service });
    } catch (error) {
      return reply.code(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { CreateCompanyServicesController };
