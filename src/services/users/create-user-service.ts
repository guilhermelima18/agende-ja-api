import { prisma } from "../../libs/prisma";

interface ICreateUser {
  role: string;
  name: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  companyId: string;
}

class CreateUserService {
  async execute({
    role,
    name,
    email,
    phoneNumber,
    dateOfBirth,
    companyId,
  }: ICreateUser) {
    try {
      const user = await prisma.user.create({
        data: {
          role,
          name,
          email,
          phoneNumber,
          dateOfBirth: new Date(dateOfBirth),
          companyId,
        },
      });

      return user;
    } catch (error) {
      throw new Error("Erro ao criar usuário.");
    }
  }
}

export { CreateUserService };
