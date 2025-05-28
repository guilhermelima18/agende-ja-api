import { prisma } from "../../libs/prisma";

class GetCompanyService {
  async execute() {
    return await prisma.company.findMany();
  }
}

export { GetCompanyService };
