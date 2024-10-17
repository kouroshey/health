import Link from "next/link";

export interface ResultCardProps {
  path: string;
  icon: React.ReactNode;
  name: string;
  bgColor: string;
}

const ResultCard: React.FC<ResultCardProps> = ({
  icon,
  name,
  bgColor,
  path,
}) => {
  return (
    <Link href={path}>
      <div className="card flex justify-center items-center flex-col gap-1">
        <div
          className={`icon w-max border border-gray-200 rounded-md shadow-sm text-white p-6 text-xl flex-center ${bgColor}`}
        >
          {icon}
        </div>
        <div className="font-normal text-gray-500">
          <h3>{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;
