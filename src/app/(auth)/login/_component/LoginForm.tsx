import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  LoginFormSchema,
  LoginFormType,
} from "../../sign-up/models/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input/input";
import { BsPhone } from "react-icons/bs";
import Button from "@/components/ui/button/button";

const LoginForm = () => {
  const methods = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
    defaultValues: {
      age: "",
      family_name: "",
      name: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form
        className="w-full flex flex-col justify-between h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          label="لطفا شماره تماس خود را وارد کنید"
          placeholder="*********09"
          name="phone"
          icon={<BsPhone color="gray" />}
          errors={errors}
          maxLength={11}
        />

        <Button variant="contained" color="primary" className="w-full">
          ارسال کد تایید
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
