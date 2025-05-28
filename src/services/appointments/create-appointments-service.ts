import { prisma } from "../../libs/prisma";

interface ICreateAppointments {
  userId: string;
  serviceId: string;
  professionalId: string;
  companyId: string;
  status: "PENDING" | "CONFIRMED" | "CANCELED";
  scheduledAt: string;
}

class CreateAppointmentsService {
  async execute({
    userId,
    serviceId,
    professionalId,
    companyId,
    status,
    scheduledAt,
  }: ICreateAppointments) {
    const appointment = await prisma.appointment.create({
      data: {
        userId,
        serviceId,
        professionalId,
        companyId,
        status,
        scheduledAt,
      },
    });

    return appointment;
  }
}

export { CreateAppointmentsService };
