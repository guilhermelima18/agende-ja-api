import { prisma } from "../../libs/prisma";

interface ICreateProfessionals {
  name: string;
  email: string;
  phoneNumber?: string;
  companyId: string;
}

class CreateProfessionalsService {
  async execute({ name, email, phoneNumber, companyId }: ICreateProfessionals) {
    const professionalExists = await prisma.professional.findUnique({
      where: {
        email,
      },
    });

    if (professionalExists) {
      throw new Error("Já existe um profissional com esse e-mail!");
    }

    const createProfessional = await prisma.professional.create({
      data: {
        name,
        email,
        phoneNumber,
        companyId,
      },
    });

    return createProfessional;
  }
}

export { CreateProfessionalsService };
