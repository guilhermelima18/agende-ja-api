import { prisma } from "../../libs/prisma";

interface IAuth {
  email: string;
  password: string;
}

class AuthService {
  async execute({ email, password }: IAuth) {
    const auth = await prisma.user.findUnique({
      where: {
        email,
        password,
      },
    });

    if (!auth) {
      throw new Error("Usuário e/ou senha incorretos!");
    }

    return auth;
  }
}

export { AuthService };
