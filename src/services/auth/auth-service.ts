import { prisma } from "../../libs/prisma";

interface IAuth {
  email: string;
  password: string;
}

class AuthService {
  async execute({ email, password }: IAuth) {
    try {
      const auth = await prisma.user.findUnique({
        where: {
          email,
          password,
        },
      });

      if (!auth) {
        throw new Error("Usuário ou senha incorretos!");
      }

      return auth;
    } catch (error) {
      throw new Error("Não foi possível buscar o usuário.");
    }
  }
}

export { AuthService };
