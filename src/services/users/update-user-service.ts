import { prisma } from "../../libs/prisma";

interface IUpdateUser {
  id: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
}

class UpdateUserService {
  async execute({ id, name, email, phoneNumber }: IUpdateUser) {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userAlreadyExists) {
      throw new Error("Usuário não existe!");
    }

    const updatedUser = await prisma.user.update({
      data: {
        name,
        email,
        phoneNumber,
      },
      where: {
        id,
      },
    });

    return updatedUser;
  }
}

export { UpdateUserService };
