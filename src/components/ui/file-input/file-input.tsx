import { FC } from "react";
import { Spinner } from "../spinner/Spinner";
import { acceptedFileTypes } from "@/enumerations";
import Button from "../button/button";
import { FaFileArrowUp } from "react-icons/fa6";

type FileInputProps = {
  isLoading: boolean;
  title: string;
  uploadHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileType: (typeof acceptedFileTypes)[number] | "all";
  className?: string;
  fullWidth?: boolean;
  width?: string;
};

const FileInput: FC<FileInputProps> = ({
  isLoading,
  title,
  uploadHandler,
  fileType,
  fullWidth,
  width,
}: FileInputProps) => {
  return (
    <div
      className="position-relative "
      style={fullWidth ? { width: "100%" } : { width: width }}
    >
      <Button
        isLoading={isLoading}
        className="flex gap-2 z-0 align-center w-full"
        size="md"
      >
        {isLoading ? (
          <Spinner size={"small"} />
        ) : (
          <>
            <span className="font-medium text-md">{title}</span>
            <FaFileArrowUp />
          </>
        )}
      </Button>
      <input
        onChange={(e) => uploadHandler(e)}
        type="file"
        accept={fileType === "all" ? acceptedFileTypes.join(", ") : fileType}
        className="position-absolute z-3 w-100 h-100 top-0 opacity-0  cursor-pointer"
      />
    </div>
  );
};

export default FileInput;
