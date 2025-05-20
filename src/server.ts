import fastify from "fastify";
import cors from "@fastify/cors";
import cron from "node-cron";

import { authRoutes } from "./routes/auth-routes";
import { companiesRoutes } from "./routes/companies-routes";
import { usersRoutes } from "./routes/users-routes";
import { companyServicesRoutes } from "./routes/company-services-routes";
import { professionalsRoutes } from "./routes/professionals-routes";
import { appointmentsRoutes } from "./routes/appointments-routes";
import { sendDailyMessages } from "./services/appointments-message";

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
      .then(async () => {
        console.log("Servidor rodando na porta: ", 3333);

        /* (async () => {
          cron.schedule("0 8 * * *", async () => await sendDailyMessages());
        })(); */
      });
  } catch (error) {
    console.log("Ocorreu um erro no servidor: ", error);
  }
};

start();
