import { Skeleton } from "@/components/ui/skeleton/Skeleton";

const AvatarSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3 gap-4">
      <Skeleton className="h-[125px] w-[125px] rounded-full" />
      <Skeleton className="h-[50px] w-[250px] rounded-md" />
    </div>
  );
};

export default AvatarSkeleton;
