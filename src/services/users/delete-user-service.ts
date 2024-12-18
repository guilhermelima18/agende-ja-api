import { prisma } from "../../libs/prisma";

interface IDeleteUser {
  id: string;
}

class DeleteUserService {
  async execute({ id }: IDeleteUser) {
    try {
      const user = await prisma.user.delete({
        where: {
          id,
        },
      });

      return user.id;
    } catch (error) {
      throw new Error("Não foi possível excluir o usuário");
    }
  }
}

export { DeleteUserService };
