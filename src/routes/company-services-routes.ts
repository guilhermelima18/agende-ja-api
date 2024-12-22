import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { GetCompanyServicesController } from "../controllers/company-services/get-company-services-controller";
import { CreateCompanyServicesController } from "../controllers/company-services/create-company-services-controller";

export async function companyServicesRoutes(fastify: FastifyInstance) {
  fastify.get("/services", (request: FastifyRequest, reply: FastifyReply) => {
    const companyServices = new GetCompanyServicesController();
    return companyServices.handle(request, reply);
  });

  fastify.post("/services", (request: FastifyRequest, reply: FastifyReply) => {
    const companyServices = new CreateCompanyServicesController();
    return companyServices.handle(request, reply);
  });
}
