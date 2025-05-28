import { prisma } from "../../libs/prisma";

interface IDeleteAppointments {
  appointmentId: string;
}

class DeleteAppointmentsService {
  async execute({ appointmentId }: IDeleteAppointments) {
    const appointment = await prisma.appointment.update({
      where: {
        id: appointmentId,
      },
      data: {
        status: "CANCELED",
      },
    });

    return appointment;
  }
}

export { DeleteAppointmentsService };
