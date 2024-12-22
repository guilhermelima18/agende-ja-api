import { Decimal } from "@prisma/client/runtime/library";
import { prisma } from "../../libs/prisma";

interface ICreateCompanyServices {
  name: string;
  description?: string;
  duration: number;
  price: number;
  companyId: string;
}

class CreateCompanyServicesService {
  async execute({
    name,
    description,
    duration,
    price,
    companyId,
  }: ICreateCompanyServices) {
    try {
      const companyService = await prisma.service.create({
        data: {
          name,
          description,
          duration,
          price: new Decimal(price),
          companyId,
        },
      });

      return companyService;
    } catch (error) {
      throw new Error("Não foi possível criar o serviço.");
    }
  }
}

export { CreateCompanyServicesService };
