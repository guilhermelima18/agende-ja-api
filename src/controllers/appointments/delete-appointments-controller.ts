import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteAppointmentsService } from "../../services/appointments/delete-appointments-service";

interface DeleteAppointmentsParams {
  appointmentId: string;
}

class DeleteAppointmentsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { appointmentId } = request.params as DeleteAppointmentsParams;

    const appointmentService = new DeleteAppointmentsService();
    const appointment = await appointmentService.execute({
      appointmentId,
    });

    return reply.code(200).send({ data: appointment });
  }
}

export { DeleteAppointmentsController };
