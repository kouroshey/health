"use client";

import Image from "next/image";

import Button from "@/components/ui/button/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="h-[90vh] w-full flex flex-col justify-center items-center gap-y-3">
      <Image
        src={"/image/orange.svg"}
        alt="not found icon"
        width={100}
        height={100}
      />
      <h2 className="text-error text-lg md:text-xl">مشکلی پیش آمده</h2>
      <p className="text-gray-500 text-md">
        لطفا ابتدا اتصال خود به اینترنت را چک کنید سپس دوباره تلاش کنید. همچنان
        ممکن است این مشکل از سمت زیرساخت های{" "}
        <span className="text-primary">نارنج</span> باشد.
      </p>
      <Button
        variant="contained"
        color="error"
        className="text-white"
        onClick={() => reset()}
      >
        تلاش دوباره
      </Button>
    </div>
  );
}
