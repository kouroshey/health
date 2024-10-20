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
});

export type SignUpFormType = z.infer<typeof SignUpFormSchema>;
