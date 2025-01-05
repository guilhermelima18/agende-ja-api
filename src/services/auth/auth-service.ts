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

      return auth;
    } catch (error) {
      console.error(error);
    }
  }
}

export { AuthService };
