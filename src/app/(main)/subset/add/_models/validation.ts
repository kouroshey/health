import { z } from "zod";

export const AddSubFormSchema = z.object({
  fullName: z.string().min(5, {
    message: "نام و نام خانوادگی خود را کامل وارد کنید",
  }),
  birthDate: z.number().min(1, { message: "تاریخ تولد خود را وارد کنید." }),
  gender: z.object({
    value: z.string(),
    label: z.string(),
  }),
  weight: z.string().min(1, {
    message: "وزن الزامی است.",
  }),
  height: z.string().min(2, {
    message: "قد الزامی است.",
  }),
  province: z.object({
    value: z.string(),
    label: z.string(),
  }),
  city: z.object({
    value: z.string(),
    label: z.string(),
  }),
});

export type AddSubFormType = z.infer<typeof AddSubFormSchema>;
