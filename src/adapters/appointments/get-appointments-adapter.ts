import { Company } from "../../@types/company";
import { Professional } from "../../@types/professional";
import { Service } from "../../@types/service";
import { User } from "../../@types/user";

type GetAppointments = {
  id: string;
  userId: string;
  serviceId: string;
  scheduledAt: Date;
  status: "PENDING" | "CANCELED" | "CONFIRMED";
  createdAt: Date;
  professionalId: string;
  companyId: string;
  company: Company;
  professional: Professional;
  service: Service;
  user: User;
};

type GetAppointmentsResponse = {
  id: string;
  scheduledAt: Date;
  status: "PENDING" | "CANCELED" | "CONFIRMED";
  company?: string;
  professional?: string;
  service?: string;
  user?: string;
};

export function getAppointmentsAdapter(
  appointments: GetAppointments[]
): GetAppointmentsResponse[] {
  return appointments.map((appointment) => ({
    id: appointment.id,
    scheduledAt: appointment.scheduledAt,
    status: appointment.status,
    company: appointment?.company?.name,
    professional: appointment?.professional?.name,
    service: appointment?.service?.name,
    user: appointment?.user?.name,
  }));
}
