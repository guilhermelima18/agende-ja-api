import { prisma } from "../../libs/prisma";

interface IGetUser {
  companyId: string;
}

class GetUserService {
  async execute({ companyId }: IGetUser) {
    const users = await prisma.user.findMany({
      where: {
        companyId,
      },
    });

    return users?.length > 0 ? users : [];
  }
}

export { GetUserService };
