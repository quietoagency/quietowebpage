import * as z from "zod";
import { referalOptions } from "./constants"

const referalValues = referalOptions.map((option) => option.value) as [string, ...string[]]

export const StepOneSchema = z.object({
  name: z.string().regex(/^\D+$/, "El nombre no puede contener números"),
  email: z.email(),
  companyName: z.string(),
  phone: z.string().regex(/^\+?[\d\s]+$/, "Teléfono inválido"),
})

export const StepTwoSchema = z.object({
  projectDetails: z.string(),
  referal: z.enum(referalValues, { message: "Elegí una opción válida" }),
})