"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuizFormType, quizSchema } from "../_models/validations";
import Button from "@/components/ui/button/button";
import { useRouter } from "next/navigation";
import { routes } from "@/store/local/routes.static";

const questions = [
  {
    id: "question1",
    questionText: "سوال ۱: کدام گزینه صحیح است؟",
    options: [
      { value: "option1", label: "گزینه ۱" },
      { value: "option2", label: "گزینه ۲" },
    ],
  },
  {
    id: "question2",
    questionText: "سوال ۲: کدام گزینه صحیح است؟",
    options: [
      { value: "option1", label: "گزینه ۱" },
      { value: "option2", label: "گزینه ۲" },
    ],
  },
  {
    id: "question3",
    questionText: "سوال ۳: کدام گزینه صحیح است؟",
    options: [
      { value: "option1", label: "گزینه ۱" },
      { value: "option2", label: "گزینه ۲" },
    ],
  },
];

const Quiz = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm<QuizFormType>({
    resolver: zodResolver(quizSchema),
  });
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(
          `${routes.mentalHealth.root}/${routes.mentalHealth.result}`,
          { scroll: false },
        );
      }}
      className="max-w-md mx-auto py-6 rounded-md flex flex-col gap-8"
    >
      {questions.map((q) => (
        <div key={q.id} className="flex flex-col gap-4">
          <p className="font-semibold">{q.questionText}</p>
          <div className="flex flex-col gap-2">
            {q.options.map((option) => (
              <div key={option.value}>
                <label className="flex items-center gap-1 w-max">
                  <input
                    type="radio"
                    value={option.value}
                    {...register(q.id as keyof QuizFormType)}
                    className="appearance-none h-6 w-6 border border-primary-500 rounded-sm checked:bg-primary-500 checked:border-transparent focus:outline-none relative"
                  />
                  <span className="ml-2 w-max text-sm md:text-md text-gray-600">
                    {option.label}
                  </span>
                </label>
              </div>
            ))}
            {errors[q.id] && (
              <p className="text-red-500">
                {errors[q.id]?.message?.toString()}
              </p>
            )}
          </div>
        </div>
      ))}

      <Button isDisable={!isValid}>ثبت</Button>
    </form>
  );
};

export default Quiz;
