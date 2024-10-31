import { Controller } from "react-hook-form";
import { CreateDatePicker } from "./CreateDatePicker";

export default function DateSelection({ control, handleDateSelect }) {
  return (
    <div>
      <h3 className="text-lg">انتخاب روز</h3>
      <hr className="border rounded-md mb-8" />
      <Controller
        name="Date"
        control={control}
        render={({ field }) => (
          <CreateDatePicker {...field} onClick={handleDateSelect} />
        )}
      />
    </div>
  );
}
