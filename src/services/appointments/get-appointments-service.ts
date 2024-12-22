import { prisma } from "../../libs/prisma";

interface IGetAppointments {
  professionalId: string;
  companyId: string;
}

class GetAppointmentsService {
  async execute({ professionalId, companyId }: IGetAppointments) {
    try {
      const appointments = await prisma.appointment.findMany({
        where: {
          professionalId,
          companyId,
        },
      });

      return appointments?.length > 0 ? appointments : [];
    } catch (error) {
      throw new Error("Não foi possível buscar os agendamentos.");
    }
  }
}

export { GetAppointmentsService };
