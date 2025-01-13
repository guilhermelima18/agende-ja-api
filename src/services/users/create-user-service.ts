import { prisma } from "../../libs/prisma";

interface ICreateUser {
  role: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  dateOfBirth: string;
  companyId: string;
}

class CreateUserService {
  async execute({
    role,
    name,
    email,
    password,
    phoneNumber,
    dateOfBirth,
    companyId,
  }: ICreateUser) {
    try {
      /* const userExists = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      console.log(userExists);

      if (userExists) {
        throw new Error("Já existe um usuário com esse e-mail!");
      } */

      const user = await prisma.user.create({
        data: {
          role,
          name,
          email,
          password,
          phoneNumber,
          dateOfBirth: new Date(dateOfBirth),
          companyId,
        },
      });

      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar usuário.");
    }
  }
}

export { CreateUserService };
