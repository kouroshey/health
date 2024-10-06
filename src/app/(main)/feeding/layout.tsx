import { Metadata } from "next";

import BackPage from "@/components/BackPage";

export const metadata: Metadata = {
  title: "تغذیه",
  description: "تغذیه های سالم",
};

export default function FeedingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="w-full relative md:hidden">
        <div className="absolute right-0 h-full">
          ‌<BackPage />
        </div>
        <h1 className="w-full m-auto text-lg text-center text-primary">
          تغذیه
        </h1>
      </div>
      {children}
    </div>
  );
}
