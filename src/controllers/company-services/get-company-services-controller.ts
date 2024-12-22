import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { GetCompanyServicesService } from "../../services/company-services/get-company-services-service";

const getCompanyServicesSchema = z.object({
  companyId: z.string(),
});

class GetCompanyServicesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    let id;
    try {
      const { companyId } = getCompanyServicesSchema.parse(request.query);
      id = companyId;
    } catch (error) {
      throw new Error("ID da empresa é obrigatório");
    }

    const companyServices = new GetCompanyServicesService();
    const services = await companyServices.execute({ companyId: id });

    return reply.code(200).send({ data: services });
  }
}

export { GetCompanyServicesController };
