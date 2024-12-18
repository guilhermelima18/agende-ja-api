import { prisma } from "../../libs/prisma";

class GetUserService {
  async execute() {
    try {
      const users = await prisma.user.findMany();

      return users;
    } catch (error) {
      throw new Error("Erro ao buscar usuários");
    }
  }
}

export { GetUserService };
