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
    try {
      const { success, data } = createCompanySchema.safeParse(request.body);

      if (!success) {
        return reply
          .code(400)
          .send({ error: "Campos obrigatórios não foram passados." });
      }

      const companyService = new CreateCompanyService();
      const company = await companyService.execute({
        name: data.name,
        phone: data.phone,
        address: data.address,
        addressNumber: data.addressNumber,
        city: data.city,
        uf: data.uf,
      });

      return reply.code(201).send({ data: company });
    } catch (error) {
      return reply.code(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { CreateCompanyController };
