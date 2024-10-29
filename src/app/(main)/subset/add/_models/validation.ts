import { z } from "zod";
export const AddSubFormSchema = z.object({
  name: z.string().min(2, {
    message: "نام خود را کامل وارد کنید",
  }),
  lastname: z.string().min(3, {
    message: "نام خانوادگی خود را کامل وارد کنید",
  }),
  birthdate: z.preprocess(
    (val) => (typeof val === "string" ? parseInt(val, 10) : val),
    z.number().min(1, { message: "تاریخ تولد خود را وارد کنید." }),
  ),
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
