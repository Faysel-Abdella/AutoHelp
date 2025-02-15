import { z } from "zod";
import USstates from "@/data/us-states";

const stateValues = USstates.map((state) => state.value);
export const contactSchema = z.object({
  firstName: z.preprocess(
    (val) => (typeof val === "string" ? val.trim() : val),
    z.string().min(1, { message: "First Name is required" })
  ),
  lastName: z.preprocess(
    (val) => (typeof val === "string" ? val.trim() : val),
    z.string().min(1, { message: "Last Name is required" })
  ),
  email: z.preprocess(
    (val) => (typeof val === "string" ? val.trim() : val),
    z.string().email({ message: "Invalid email address" })
  ),
  phone: z
    .string()
    .optional()
    .transform((val) => (val ? val.trim() : val)),
  preferredLanguage: z
    .string()
    .optional()
    .transform((val) => (val ? val.trim() : val)),
  state: z
    .string()
    .min(1, { message: "State is required" })
    .refine((val) => stateValues.includes(val), {
      message: "Invalid state selected",
    }),
});
export const PopupContactSchema = z.object({
  name: z.preprocess(
    (val) => (typeof val === "string" ? val.trim() : val),
    z.string().min(1, { message: "Name is required" })
  ),

  email: z.preprocess(
    (val) => (typeof val === "string" ? val.trim() : val),
    z.string().email({ message: "Invalid email address" })
  ),
});
