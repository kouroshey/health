import { z } from "zod";

export const LoginFormSchema = z.object({
  mobile: z.string().min(10, {
    message: "شماره موبایل معتبر نیست",
  }),
});
export type LoginFormType = z.infer<typeof LoginFormSchema>;
