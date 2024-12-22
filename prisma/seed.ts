import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const services = [
  {
    name: "Unhas em fibra (Alongamento)",
    description:
      "Formatos: Bailarina, Quadrada, Redonda, Estileto, Amendoada, Semi bailarina",
    duration: 150,
    price: 150,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Unhas em fibra (Manutenção)",
    description:
      "Formatos: Bailarina, Quadrada, Redonda, Estileto, Amendoada, Semi bailarina",
    duration: 150,
    price: 90,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Selante",
    description: "",
    duration: 180,
    price: 80,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Progressiva importada",
    description: "",
    duration: 240,
    price: 180,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Progressiva formol",
    description: "",
    duration: 240,
    price: 150,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Luzes",
    description: "",
    duration: 240,
    price: 230,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Tintura da raiz",
    description: "",
    duration: 90,
    price: 40,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Tintura inteiro",
    description: "",
    duration: 90,
    price: 70,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Lavagem + Escova",
    description: "",
    duration: 40,
    price: 50,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Corte + Hidratação",
    description: "",
    duration: 40,
    price: 50,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Corte",
    description: "",
    duration: 40,
    price: 30,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Botox",
    description: "",
    duration: 60,
    price: 60,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Micropigmentação fio a fio",
    description: "",
    duration: 60,
    price: 200,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Micropigmentação shadow/compacta ou esfumada",
    description: "",
    duration: 60,
    price: 240,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Delineador inferior",
    description: "",
    duration: 60,
    price: 150,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Delineador superior",
    description: "",
    duration: 60,
    price: 150,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Delineador completo (inferior + superior)",
    description: "",
    duration: 60,
    price: 250,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Batom",
    description: "",
    duration: 60,
    price: 200,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Contorno labial",
    description: "",
    duration: 60,
    price: 150,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Remoção de pálpebra (sessão)",
    description: "",
    duration: 60,
    price: 150,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Retoques anuais",
    description: "",
    duration: 60,
    price: 150,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Remoção de sobrancelha com laser (sessão)",
    description: "",
    duration: 60,
    price: 80,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Limpeza de pele profunda + buço",
    description: "",
    duration: 60,
    price: 90,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Peeling de diamante",
    description: "",
    duration: 60,
    price: 80,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Peeling de cristal (químico)",
    description: "",
    duration: 60,
    price: 90,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "BB Glow (sessão)",
    description: "",
    duration: 60,
    price: 150,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "BB Glow (pacote 3 sessões)",
    description: "",
    duration: 60,
    price: 300,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Design de sobrancelhas",
    description: "",
    duration: 60,
    price: 20,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Henna",
    description: "",
    duration: 60,
    price: 20,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Remoção de verruga",
    description: "",
    duration: 60,
    price: 80,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Microagulhamento",
    description: "",
    duration: 60,
    price: 380,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Preenchimento labial ou rugas (Rennova)",
    description: "",
    duration: 60,
    price: 520,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
  {
    name: "Preenchimento labial ou rugas (Biometil)",
    description: "",
    duration: 60,
    price: 180,
    companyId: "a42dfc58-7a2d-46ce-8863-8979e20ea6ce",
  },
];

async function main() {
  /* for (const service of services) {
    await prisma.service.create({
      data: {
        name: service.name,
        description: service.description,
        duration: service.duration,
        price: service.price,
        companyId: service.companyId,
      },
    });
  } */

  const professionalId = "f12f6f7f-7e17-4b5d-8728-0c460e0a0564";

  // Buscar todos os IDs de serviços
  const services = await prisma.service.findMany({
    select: { id: true }, // Retorna apenas os IDs dos serviços
  });

  // Criar relacionamentos na tabela intermediária
  const relationships = services.map((service) => ({
    professionalId,
    serviceId: service.id,
  }));

  await prisma.professionalOnService.createMany({
    data: relationships,
    skipDuplicates: true, // Evita erros se o relacionamento já existir
  });

  console.log("Serviços atribuídos ao profissional com sucesso!");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
