import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { GetCompanyServicesService } from "../../services/company-services/get-company-services-service";

const getCompanyServicesSchema = z.object({
  professionalId: z.string(),
  companyId: z.string(),
});

class GetCompanyServicesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { success, data } = getCompanyServicesSchema.safeParse(
        request.query
      );

      if (!success) {
        return reply
          .code(400)
          .send({ error: "professionalId e companyId são obrigatórios." });
      }

      const companyServices = new GetCompanyServicesService();
      const services = await companyServices.execute({
        professionalId: data.professionalId,
        companyId: data.companyId,
      });

      const servicesMapped = services.map((service) => ({
        id: service.id,
        name: service.name,
        description: service.description,
        duration: service.duration,
        price: service.price,
      }));

      return reply.code(200).send({ data: servicesMapped });
    } catch (error) {
      return reply.code(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { GetCompanyServicesController };
