import z from "zod";

export const dietPlanSchema = z.object({
  breakfast: z.object({
    food_id: z.number(),
    meal: z.number(),
  }),
  snack1: z.object({
    food_id: z.number(),
    meal: z.number(),
  }),
  lunch: z.object({
    food_id: z.number(),
    meal: z.number(),
  }),
  snack2: z.object({
    food_id: z.number(),
    meal: z.number(),
  }),
  dinner: z.object({
    food_id: z.number(),
    meal: z.number(),
  }),
  Date: z.string().min(1),
});

export type DietPlanFormType = z.infer<typeof dietPlanSchema>;
