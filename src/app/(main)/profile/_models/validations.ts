import { z } from "zod";

export const PersonalDetailsFormSchema = z.object({
  name: z.string().min(3, { message: "نام حداقل باید ۳ کاراکتر باشد" }),
  family_name: z
    .string()
    .min(3, { message: "نام خانوادگی حداقل باید ۳ کاراکتر باشد" }),
});
export type PersonalDetailsFormType = z.infer<typeof PersonalDetailsFormSchema>;
