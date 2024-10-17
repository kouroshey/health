import Image, { StaticImageData } from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

export interface ListItemProps {
  image: StaticImageData;
  title: string;
  description?: string;
  path: string;
  id: number;
}

const ListItem: React.FC<ListItemProps> = ({
  image,
  path,
  title,
  description,
}) => {
  return (
    <Link href={path}>
      <div className="flex items-center px-2 gap-x-2 border border-slate-100 pl-2 rounded-md h-full">
        <div className="h-24 w-2/6 relative">
          <Image
            src={image}
            alt={title}
            className="rounded-r-md pb-[1px] object-contain"
            fill={true}
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="h-full w-full relative rounded-md text-gray-600 font-bold border-gray-100 py-4 px-2 hover:shadow-sm hover:text-primary flex justify-center">
          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-sm md:text-md">{title}</h3>
            <p className="text-xs text-gray-400">{description}</p>
          </div>

          <div className="text-[10px] text-primary gap-1 flex items-center font-normal md:text-lg justify-self-end self-end">
            <span className="w-max">ادامه مطلب</span>
            <IoIosArrowBack />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
