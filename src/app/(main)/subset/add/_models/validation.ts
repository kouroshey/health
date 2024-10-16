import { z } from "zod";

export const AddSubFormSchema = z.object({
  fullName: z.string().min(5, {
    message: "نام و نام خانوادگی خود را کامل وارد کنید",
  }),
  birthDate: z.string().date("تاریخ تولد خود را کامل وارد کنید"),
  gender: z.string(),
  weight: z.string().min(1, {
    message: "وزن الزامی است.",
  }),
  height: z.string().min(2, {
    message: "قد الزامی است.",
  }),
  province: z.string().min(2, { message: "استان خود را وارد نمایید" }),
  city: z.string().min(2, { message: "شهر خود را وارد نمایید" }),
});

export type AddSubFormType = z.infer<typeof AddSubFormSchema>;
