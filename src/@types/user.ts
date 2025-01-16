type User = {
  id: string;
  role: "admin" | "user";
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  dateOfBirth: Date;
  createdAt: Date;
  companyId: string;
};

export { User };
