import { prisma } from "../../libs/prisma";

interface IGetUser {
  companyId: string;
}

class GetUserService {
  async execute({ companyId }: IGetUser) {
    try {
      const users = await prisma.user.findMany({
        where: {
          companyId,
        },
      });

      return users?.length > 0 ? users : [];
    } catch (error) {
      throw new Error("Erro ao buscar usuários");
    }
  }
}

export { GetUserService };
