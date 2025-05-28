import { prisma } from "../../libs/prisma";

interface IGetCompanyServices {
  professionalId: string;
  companyId: string;
}

class GetCompanyServicesService {
  async execute({ professionalId, companyId }: IGetCompanyServices) {
    const companyServices = await prisma.service.findMany({
      where: {
        companyId,
        professionals: {
          some: {
            professionalId,
          },
        },
      },
    });

    return companyServices?.length > 0 ? companyServices : [];
  }
}

export { GetCompanyServicesService };
