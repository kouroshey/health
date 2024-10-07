import { z } from "zod";

export const LoginFormSchema = z.object({
  phone: z.string().regex(/^(\+98|0)?9\d{9}$/, {
    message: "Phone number must be a valid Iranian number",
  }),
});
export type LoginFormType = z.infer<typeof LoginFormSchema>;