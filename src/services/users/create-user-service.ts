import { prisma } from "../../libs/prisma";

interface ICreateUser {
  role: string;
  name: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
}

class CreateUserService {
  async execute({ role, name, email, phoneNumber, dateOfBirth }: ICreateUser) {
    try {
      const user = {
        role,
        name,
        email,
        phoneNumber,
        dateOfBirth,
      };
      /* const user = await prisma.user.create({
        data: {
          role: "admin",
          name,
          email,
          phoneNumber,
          dateOfBirth,
        },
      }); */

      return user;
    } catch (error) {
      console.log("Erro ao buscar usuários: ", error);
    }
  }
}

export { CreateUserService };
