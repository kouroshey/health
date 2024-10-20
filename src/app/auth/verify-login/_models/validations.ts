import { z } from "zod";

export const VerifyFormSchema = z.object({
  otp_token: z.string().min(4, {
    message: "کد وارد شده اشتباه است.",
  }),
});
export type VerifyFormType = z.infer<typeof VerifyFormSchema>;
