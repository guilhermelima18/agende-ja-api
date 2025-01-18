import { prisma } from "../../libs/prisma";

interface IDeleteAppointments {
  appointmentId: string;
}

class DeleteAppointmentsService {
  async execute({ appointmentId }: IDeleteAppointments) {
    try {
      const appointment = await prisma.appointment.delete({
        where: {
          id: appointmentId,
        },
      });

      return appointment;
    } catch (error) {
      throw new Error("Não foi possível excluir um agendamento.");
    }
  }
}

export { DeleteAppointmentsService };
