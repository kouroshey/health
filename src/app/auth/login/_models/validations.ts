import { z } from "zod";

export const LoginFormSchema = z.object({
  mobile: z.string().regex(/^09[0-9]{9}$/, {
    message:
      "شماره موبایل معتبر نیست. شماره باید با 09 شروع شود و شامل 11 رقم باشد.",
  }),
});
export type LoginFormType = z.infer<typeof LoginFormSchema>;
