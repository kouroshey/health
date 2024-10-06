import { z } from "zod";

export const LoginFormSchema = z.object({
  name: z.string().min(1, { message: "Farsi Name is required" }),
  family_name: z.string().min(1, { message: "English Name is required" }),
  age: z.string().min(1, { message: "Arabic Name is required" }),
});
// name
// family
// family
// age
// height
// weight
// daily body activity

export type LoginFormType = z.infer<typeof LoginFormSchema>;
