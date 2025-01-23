import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { prisma } from "../../libs/prisma";
import { gClient } from "../../libs/gzappy";

dayjs.extend(utc);

export async function sendDailyMessages() {
  try {
    const now = dayjs();
    const oneDayLater = now.add(1, "day").startOf("day");

    // Obtenha agendamentos para o dia seguinte
    const schedules = await prisma.appointment.findMany({
      where: {
        scheduledAt: {
          gte: oneDayLater.toDate(),
          lt: oneDayLater.add(1, "day").toDate(),
        },
      },
      include: {
        user: true,
        professional: true,
        service: true,
      },
    });

    for (const schedule of schedules) {
      const { name: customerName, phoneNumber: customerPhone } = schedule.user;
      const { name: professionalName } = schedule.professional;
      const { name: serviceName } = schedule.service;

      const formattedDate = dayjs
        .utc(schedule.scheduledAt)
        .format("DD/MM/YYYY HH:mm");

      const message = [
        `Olá, ${customerName}!, Este é um lembrete do seu agendamento de ${serviceName} em ${formattedDate} com a profissional ${professionalName}.`,
      ];

      if (customerPhone) {
        let phone = `55${customerPhone}`;
        try {
          await gClient.sendMessage(message, [phone]);
        } catch (error) {
          console.log(
            "Ocorreu um erro ao enviar a mensagem no WhatsApp!",
            error
          );
        }
      }
    }
  } catch (error) {
    console.error(`Erro ao enviar mensagens: ${error}`);
  }
}
