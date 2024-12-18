import { prisma } from "../../libs/prisma";

class GetCompanyService {
  async execute() {
    try {
      const company = await prisma.company.findMany();

      return company;
    } catch (error) {
      throw new Error("Não foi possível buscar as empresas.");
    }
  }
}

export { GetCompanyService };
