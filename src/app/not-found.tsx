import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[90vh] w-full flex flex-col justify-center items-center">
      <Image src={"/orange-tired.svg"} alt="stop" width={100} height={100} />
      <h2 className="text-xl md:text-3xl text-primary leading-none">404</h2>
      <h2 className="text-xl mb-3">صفحه ای پیدا نشد</h2>
      <Link href="/" className="text-gray-500 border-b border-primary">
        برگشت به خانه
      </Link>
    </div>
  );
}
