import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const services = [
    {
      name: "Unhas em fibra (Alongamento)",
      description:
        "Formatos: Bailarina, Quadrada, Redonda, Estileto, Amendoada, Semi bailarina",
      duration: 150,
      price: 150,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Unhas em fibra (Manutenção)",
      description:
        "Formatos: Bailarina, Quadrada, Redonda, Estileto, Amendoada, Semi bailarina",
      duration: 150,
      price: 90,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Selante",
      description: "",
      duration: 180,
      price: 80,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Progressiva importada",
      description: "",
      duration: 240,
      price: 180,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Progressiva formol",
      description: "",
      duration: 240,
      price: 150,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Luzes",
      description: "",
      duration: 240,
      price: 230,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Tintura da raiz",
      description: "",
      duration: 90,
      price: 40,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Tintura inteiro",
      description: "",
      duration: 90,
      price: 70,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Lavagem + Escova",
      description: "",
      duration: 40,
      price: 50,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Corte + Hidratação",
      description: "",
      duration: 40,
      price: 50,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Corte",
      description: "",
      duration: 40,
      price: 30,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Botox",
      description: "",
      duration: 60,
      price: 60,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Micropigmentação fio a fio",
      description: "",
      duration: 60,
      price: 200,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Micropigmentação shadow/compacta ou esfumada",
      description: "",
      duration: 60,
      price: 240,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Delineador inferior",
      description: "",
      duration: 60,
      price: 150,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Delineador superior",
      description: "",
      duration: 60,
      price: 150,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Delineador completo (inferior + superior)",
      description: "",
      duration: 60,
      price: 250,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Batom",
      description: "",
      duration: 60,
      price: 200,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Contorno labial",
      description: "",
      duration: 60,
      price: 150,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Remoção de pálpebra (sessão)",
      description: "",
      duration: 60,
      price: 150,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Retoques anuais",
      description: "",
      duration: 60,
      price: 150,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Remoção de sobrancelha com laser (sessão)",
      description: "",
      duration: 60,
      price: 80,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Limpeza de pele profunda + buço",
      description: "",
      duration: 60,
      price: 90,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Peeling de diamante",
      description: "",
      duration: 60,
      price: 80,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Peeling de cristal (químico)",
      description: "",
      duration: 60,
      price: 90,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "BB Glow (sessão)",
      description: "",
      duration: 60,
      price: 150,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "BB Glow (pacote 3 sessões)",
      description: "",
      duration: 60,
      price: 300,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Design de sobrancelhas",
      description: "",
      duration: 60,
      price: 20,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Henna",
      description: "",
      duration: 60,
      price: 20,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Remoção de verruga",
      description: "",
      duration: 60,
      price: 80,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Microagulhamento",
      description: "",
      duration: 60,
      price: 380,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Preenchimento labial ou rugas (Rennova)",
      description: "",
      duration: 60,
      price: 520,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
    {
      name: "Preenchimento labial ou rugas (Biometil)",
      description: "",
      duration: 60,
      price: 180,
      companyId: "c3d302ec-4b9d-48ea-a249-595ec5dd9065",
    },
  ];

  for (const service of services) {
    await prisma.service.create({
      data: {
        name: service.name,
        description: service.description,
        duration: service.duration,
        price: service.price,
        companyId: service.companyId,
      },
    });
  }

  const professionalId = "d302e1a5-5410-4a55-bf05-f31b41c2ecfc";

  // Buscar todos os IDs de serviços
  const servicesIds = await prisma.service.findMany({
    select: { id: true }, // Retorna apenas os IDs dos serviços
  });

  // Criar relacionamentos na tabela intermediária
  const relationships = servicesIds.map((service) => ({
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
