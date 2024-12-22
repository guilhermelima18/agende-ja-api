import { prisma } from "../../libs/prisma";

interface IGetProfessionals {
  companyId: string;
}

class GetProfessionalsService {
  async execute({ companyId }: IGetProfessionals) {
    try {
      const professionals = await prisma.professional.findMany({
        where: {
          companyId,
        },
      });
      return professionals?.length > 0 ? professionals : [];
    } catch (error) {
      throw new Error("Não foi possível buscar os profissionais");
    }
  }
}

export { GetProfessionalsService };
