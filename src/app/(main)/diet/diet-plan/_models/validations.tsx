import z from "zod";

export const mealPlanSchema = z.object({
  breakfast: z
    .string()
    .min(1, { message: "شما باید یک گزینه برای صبحانه انتخاب کنید" }),
  snack1: z
    .string()
    .min(1, { message: "شما باید یک گزینه برای میان وعده انتخاب کنید" }),
  lunch: z
    .string()
    .min(1, { message: "شما باید یک گزینه برای ناهار انتخاب کنید" }),
  snack2: z
    .string()
    .min(1, { message: "شما باید یک گزینه برای میان وعده انتخاب کنید" }),
  dinner: z
    .string()
    .min(1, { message: "شما باید یک گزینه برای شام انتخاب کنید" }),
});

export type MealPlanFormType = z.infer<typeof mealPlanSchema>;
