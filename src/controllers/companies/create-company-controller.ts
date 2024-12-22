import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { CreateCompanyService } from "../../services/companies/create-company-service";

const createCompanySchema = z.object({
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  addressNumber: z.string(),
  city: z.string(),
  uf: z.string(),
});

class CreateCompanyController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, phone, address, addressNumber, city, uf } =
      createCompanySchema.parse(request.body);

    const companyService = new CreateCompanyService();
    const company = await companyService.execute({
      name,
      phone,
      address,
      addressNumber,
      city,
      uf,
    });

    return reply.code(201).send({ data: company });
  }
}

export { CreateCompanyController };
