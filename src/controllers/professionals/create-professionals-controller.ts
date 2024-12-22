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
    const { name, email, phoneNumber, companyId } =
      createProfessionalsSchema.parse(request.body);

    const professionalsService = new CreateProfessionalsService();
    const professional = await professionalsService.execute({
      name,
      email,
      phoneNumber,
      companyId,
    });

    return reply.code(201).send({ data: professional });
  }
}

export { CreateProfessionalsController };
