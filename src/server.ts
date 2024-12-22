import fastify from "fastify";
import cors from "@fastify/cors";

import { authRoutes } from "./routes/auth-routes";
import { companiesRoutes } from "./routes/companies-routes";
import { usersRoutes } from "./routes/users-routes";
import { companyServicesRoutes } from "./routes/company-services-routes";
import { professionalsRoutes } from "./routes/professionals-routes";
import { appointmentsRoutes } from "./routes/appointments-routes";

const app = fastify();

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  app.register(cors);
  app.register(authRoutes);
  app.register(companiesRoutes);
  app.register(usersRoutes);
  app.register(companyServicesRoutes);
  app.register(professionalsRoutes);
  app.register(appointmentsRoutes);

  try {
    app
      .listen({
        port: 3333,
        host: "0.0.0.0",
      })
      .then(() => console.log("Servidor rodando na porta: ", 3333));
  } catch (error) {
    console.log("Ocorreu um erro no servidor: ", error);
  }
};

start();
