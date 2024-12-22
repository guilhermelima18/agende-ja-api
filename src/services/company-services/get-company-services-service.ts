import { prisma } from "../../libs/prisma";

interface IGetCompanyServices {
  companyId: string;
}

class GetCompanyServicesService {
  async execute({ companyId }: IGetCompanyServices) {
    try {
      const companyServices = await prisma.service.findMany({
        where: {
          companyId,
        },
      });
      return companyServices?.length > 0 ? companyServices : [];
    } catch (error) {
      throw new Error("Não foi possível buscar os serviços.");
    }
  }
}

export { GetCompanyServicesService };
