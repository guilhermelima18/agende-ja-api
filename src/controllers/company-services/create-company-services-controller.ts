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
    const { name, description, duration, price, companyId } =
      createCompanyServicesSchema.parse(request.body);

    const companyService = new CreateCompanyServicesService();

    const service = await companyService.execute({
      name,
      description,
      duration,
      price,
      companyId,
    });

    return reply.code(201).send({ data: service });
  }
}

export { CreateCompanyServicesController };
