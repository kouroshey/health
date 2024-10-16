import z from "zod";

export const quizSchema = z.object({
  question1: z
    .string()
    .min(1, { message: "لطفاً یک گزینه برای سوال اول انتخاب کنید" }),
  question2: z
    .string()
    .min(1, { message: "لطفاً یک گزینه برای سوال دوم انتخاب کنید" }),
  question3: z
    .string()
    .min(1, { message: "لطفاً یک گزینه برای سوال سوم انتخاب کنید" }),
});

export type QuizFormType = z.infer<typeof quizSchema>;
