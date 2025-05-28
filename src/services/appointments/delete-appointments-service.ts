import { prisma } from "../../libs/prisma";

interface IDeleteAppointments {
  appointmentId: string;
}

class DeleteAppointmentsService {
  async execute({ appointmentId }: IDeleteAppointments) {
    const appointment = await prisma.appointment.delete({
      where: {
        id: appointmentId,
      },
    });

    return appointment;
  }
}

export { DeleteAppointmentsService };
