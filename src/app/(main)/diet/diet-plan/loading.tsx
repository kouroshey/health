import { Skeleton } from "@/components/ui/skeleton/Skeleton";

const Loading = () => {
  return (
    <div className="my-4 flex flex-col gap-5">
      <Skeleton className="w-full h-28" />
      <Skeleton className="w-full h-28" />
      <Skeleton className="w-full h-28" />
      <Skeleton className="w-full h-28" />
    </div>
  );
};

export default Loading;
