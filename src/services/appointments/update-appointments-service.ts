import { prisma } from "../../libs/prisma";

interface IUpdateAppointments {
  appointmentId: string;
}

class UpdateAppointmentsService {
  async execute({ appointmentId }: IUpdateAppointments) {
    const appointment = await prisma.appointment.update({
      where: {
        id: appointmentId,
      },
      data: {
        status: "CONFIRMED",
      },
    });

    return appointment;
  }
}

export { UpdateAppointmentsService };
