import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { GetCompanyServicesService } from "../../services/company-services/get-company-services-service";

const getCompanyServicesSchema = z.object({
  professionalId: z.string(),
  companyId: z.string(),
});

class GetCompanyServicesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    let id_profissional, id_empresa;
    try {
      const { professionalId, companyId } = getCompanyServicesSchema.parse(
        request.query
      );
      id_profissional = professionalId;
      id_empresa = companyId;
    } catch (error) {
      throw new Error("ID do profissional e da empresa é obrigatório");
    }

    const companyServices = new GetCompanyServicesService();
    const services = await companyServices.execute({
      professionalId: id_profissional,
      companyId: id_empresa,
    });

    const servicesMapped = services.map((service) => ({
      id: service.id,
      name: service.name,
      description: service.description,
      duration: service.duration,
      price: service.price,
    }));

    return reply.code(200).send({ data: servicesMapped });
  }
}

export { GetCompanyServicesController };
