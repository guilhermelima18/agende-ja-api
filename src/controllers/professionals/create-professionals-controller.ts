import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreateProfessionalsService } from "../../services/professionals/create-professionals-service";

const createProfessionalsSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  companyId: z.string(),
});

class CreateProfessionalsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { success, data } = createProfessionalsSchema.safeParse(
        request.body
      );

      if (!success) {
        return reply
          .code(400)
          .send({ error: "Campos obrigatórios não foram passados." });
      }

      const professionalsService = new CreateProfessionalsService();
      const professional = await professionalsService.execute({
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        companyId: data.companyId,
      });

      return reply.code(201).send({ data: professional });
    } catch (error: any) {
      if (error.message === "Já existe um profissional com esse e-mail!") {
        return reply.status(400).send({ error: error.message });
      }

      return reply.code(500).send({ error: "Erro interno do servidor." });
    }
  }
}

export { CreateProfessionalsController };
