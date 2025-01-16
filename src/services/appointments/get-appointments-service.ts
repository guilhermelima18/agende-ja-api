import { getAppointmentsAdapter } from "../../adapters/appointments/get-appointments-adapter";
import { prisma } from "../../libs/prisma";

interface IGetAppointments {
  professionalId: string;
  companyId: string;
}

class GetAppointmentsService {
  async execute({ professionalId, companyId }: IGetAppointments) {
    try {
      const appointmentsPrisma = (await prisma.appointment.findMany({
        where: {
          professionalId,
          companyId,
        },
        include: {
          company: true,
          professional: true,
          service: true,
          user: true,
        },
        orderBy: {
          scheduledAt: "desc",
        },
      })) as any;

      const appointments = getAppointmentsAdapter(appointmentsPrisma);

      return appointments?.length > 0 ? appointments : [];
    } catch (error) {
      throw new Error("Não foi possível buscar os agendamentos.");
    }
  }
}

export { GetAppointmentsService };
