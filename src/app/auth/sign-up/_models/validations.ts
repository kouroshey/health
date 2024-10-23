import { z } from "zod";

export const SignUpFormSchema = z.object({
  name: z.string().min(3, {
    message: "نام باید حداقل ۳ کاراکتر داشته باشد",
  }),
  lastname: z.string().min(3, {
    message: "نام خانوادگی باید حداقل ۳ کاراکتر داشته باشد",
  }),
  gender: z.object({
    value: z.string(),
    label: z.string(),
  }),
  mobile: z.string().regex(/^09[0-9]{9}$/, {
    message:
      "شماره موبایل معتبر نیست. شماره باید با 09 شروع شود و شامل 11 رقم باشد.",
  }),
  otp_token: z.string().min(4, {
    message: "کد وارد شده اشتباه است.",
  }),
});

export type SignUpFormType = z.infer<typeof SignUpFormSchema>;
