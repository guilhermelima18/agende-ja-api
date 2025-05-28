import { prisma } from "../../libs/prisma";

interface ICreateCompany {
  name: string;
  phone: string;
  address: string;
  addressNumber: string;
  city: string;
  uf: string;
}

class CreateCompanyService {
  async execute({
    name,
    phone,
    address,
    addressNumber,
    city,
    uf,
  }: ICreateCompany) {
    const company = await prisma.company.create({
      data: {
        name,
        phone,
        address,
        addressNumber,
        city,
        uf,
      },
    });

    return company;
  }
}

export { CreateCompanyService };
