import { Skeleton } from "@/components/ui/skeleton/Skeleton";

const Loading = () => {
  return (
    <div className="my-4 flex flex-col gap-5">
      <Skeleton className="w-full h-60" />
      <hr className="border rounded-md border-gray-100" />
      <Skeleton className="w-2/5 h-6" />
      <hr className="border rounded-md border-gray-100" />
      <div>
        <Skeleton className="w-1/4 h-6 mb-3" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
        </div>
      </div>
      <div>
        <Skeleton className="w-1/4 h-6 mb-3" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
          <Skeleton className="w-4/5 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
