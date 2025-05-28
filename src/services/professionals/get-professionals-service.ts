import { prisma } from "../../libs/prisma";

interface IGetProfessionals {
  companyId: string;
}

class GetProfessionalsService {
  async execute({ companyId }: IGetProfessionals) {
    const professionals = await prisma.professional.findMany({
      where: {
        companyId,
      },
    });

    return professionals?.length > 0 ? professionals : [];
  }
}

export { GetProfessionalsService };
