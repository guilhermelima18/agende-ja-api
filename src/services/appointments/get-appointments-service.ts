import { getAppointmentsAdapter } from "../../adapters/appointments/get-appointments-adapter";
import { prisma } from "../../libs/prisma";

interface IGetAppointments {
  professionalId?: string;
  companyId: string;
  userId?: string;
}

class GetAppointmentsService {
  async execute({ professionalId, companyId, userId }: IGetAppointments) {
    const appointmentsPrisma = (await prisma.appointment.findMany({
      where: {
        professionalId: professionalId ? professionalId : undefined,
        companyId,
        userId: userId ? userId : undefined,
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
  }
}

export { GetAppointmentsService };
