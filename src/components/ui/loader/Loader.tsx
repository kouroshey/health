import { Spinner } from "../spinner/Spinner";

const Loader = () => {
  return (
    <div className="flex flex-center h-full w-full">
      <Spinner className="text-primary" />
    </div>
  );
};

export default Loader;
