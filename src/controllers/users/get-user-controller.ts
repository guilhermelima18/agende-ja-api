import { FastifyReply, FastifyRequest } from "fastify";
import { GetUserService } from "../../services/users/get-user-service";
import { z } from "zod";

const getUserSchema = z.object({
  companyId: z.string(),
});

class GetUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    let id;

    try {
      const { companyId } = getUserSchema.parse(request.query);
      id = companyId;
    } catch (error) {
      throw new Error("ID da empresa é obrigatório");
    }

    const userService = new GetUserService();
    const users = await userService.execute({ companyId: id });

    return reply.status(200).send({ data: users });
  }
}

export { GetUserController };
