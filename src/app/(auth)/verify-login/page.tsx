import Link from "next/link";
import VerifyLoginForm from "./_components/VerifyForm";

const VerifyLoginPage = () => {
  return (
    <div className="w-full gap-3 px-3 backdrop-blur-lg">
      <div className="flex flex-col gap-4 justify-start items-center h-full w-full">
        <div className="mb-10 flex flex-col gap-2 items-center">
          <p className="text-gray-400">لطفا کد تایید ارسال شده را وارد کنید</p>
          <Link
            href={"/login"}
            className="text-gray-400 font-light text-sm text-center w-max after:absolute after:w-full after:h-[2px] after:rounded-sm after:left-0 after:bg-primary relative after:-bottom-1 cursor-pointer hover:text-primary-600"
          >
            تغییر شماره موبایل
          </Link>
        </div>
        <VerifyLoginForm />
      </div>
    </div>
  );
};

export default VerifyLoginPage;
