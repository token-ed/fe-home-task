import { z } from "zod";

export enum Role {
  StaffEngineer = "Staff Engineer",
  SeniorDeveloper = "Senior Developer",
  JuniorDeveloper = "Junior Developer",
  CTO = "CTO",
}

export const ContactSchema = z.object({
  avatar: z.string().optional(),
  email: z.string().email(),
  gender: z.enum(["male", "female"]).optional(),
  name: z.string(),
  role: z.nativeEnum(Role).optional(),
  uuid: z.string().uuid(),
});

export type Contact = z.infer<typeof ContactSchema>;
