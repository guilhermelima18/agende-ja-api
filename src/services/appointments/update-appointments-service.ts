import { prisma } from "../../libs/prisma";

interface IUpdateAppointments {
  appointmentId: string;
}

class UpdateAppointmentsService {
  async execute({ appointmentId }: IUpdateAppointments) {
    try {
      const appointment = await prisma.appointment.update({
        where: {
          id: appointmentId,
        },
        data: {
          status: "CONFIRMED",
        },
      });

      return appointment;
    } catch (error) {
      throw new Error("Não foi possível atualizar o status do agendamento.");
    }
  }
}

export { UpdateAppointmentsService };
