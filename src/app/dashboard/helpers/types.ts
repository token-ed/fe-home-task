import { z } from "zod";

export enum Position {
  StaffEngineer = "Staff Engineer",
  SeniorDeveloper = "Senior Developer",
  JuniorDeveloper = "Junior Developer",
  CTO = "CTO",
}

export const ContactSchema = z.object({
  email: z.string().email(),
  gender: z.enum(["male", "female"]).optional(),
  name: z.string(),
  position: z.nativeEnum(Position).optional(),
  uuid: z.string().uuid(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

export type Contact = z.infer<typeof ContactSchema>;
