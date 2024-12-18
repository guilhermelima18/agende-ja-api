import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { CreateCompanyService } from "../../services/companies/create-company-service";

const createCompanySchema = z.object({
  name: z.string({ required_error: "Nome é obrigatório" }),
  phone: z.string({ required_error: "Telefone é obrigatório" }),
  address: z.string({ required_error: "Endereço é obrigatório" }),
  addressNumber: z.string({ required_error: "Número é obrigatório" }),
  city: z.string({ required_error: "Cidade é obrigatório" }),
  uf: z.string({ required_error: "Estado é obrigatório" }),
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
