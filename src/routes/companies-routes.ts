import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { CreateCompanyController } from "../controllers/companies/create-company-controller";
import { GetCompanyController } from "../controllers/companies/get-company-controller";

export async function companiesRoutes(fastify: FastifyInstance) {
  fastify.get("/companies", (request: FastifyRequest, reply: FastifyReply) => {
    const companyController = new GetCompanyController();
    return companyController.handle(request, reply);
  });

  fastify.post("/companies", (request: FastifyRequest, reply: FastifyReply) => {
    const companyController = new CreateCompanyController();
    return companyController.handle(request, reply);
  });
}
