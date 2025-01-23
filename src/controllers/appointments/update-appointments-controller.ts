import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateAppointmentsService } from "../../services/appointments/update-appointments-service";

interface UpdateAppointmentsParams {
  appointmentId: string;
}

class UpdateAppointmentsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { appointmentId } = request.params as UpdateAppointmentsParams;

    const appointmentService = new UpdateAppointmentsService();
    const appointment = await appointmentService.execute({
      appointmentId,
    });

    return reply.code(200).send({ data: appointment });
  }
}

export { UpdateAppointmentsController };
