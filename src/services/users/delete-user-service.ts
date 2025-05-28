import { prisma } from "../../libs/prisma";

interface IDeleteUser {
  userId: string;
}

class DeleteUserService {
  async execute({ userId }: IDeleteUser) {
    const user = await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return user.id;
  }
}

export { DeleteUserService };
