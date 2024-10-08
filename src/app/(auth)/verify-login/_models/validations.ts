import { z } from "zod";

export const VerifyFormSchema = z.object({
  verify_code: z.string().regex(/^(\+98|0)?9\d{9}$/, {
    message: "شماره وارد شده اشتباه است.",
  }),
});
export type VerifyFormType = z.infer<typeof VerifyFormSchema>;
