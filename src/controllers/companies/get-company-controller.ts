import { FastifyReply, FastifyRequest } from "fastify";
import { GetCompanyService } from "../../services/companies/get-company-service";

class GetCompanyController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const companyService = new GetCompanyService();
      const companies = await companyService.execute();

      return reply.code(200).send({ data: companies });
    } catch (error) {
      return reply.code(200).send({ error: "Erro interno do servidor." });
    }
  }
}

export { GetCompanyController };
