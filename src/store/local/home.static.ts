export const featuresDetails = [
  {
    path: "#",
    icon: "reports",
    name: "گزارشات من",
    bgColor: "bg-blue-400",
  },
  {
    path: "diet",
    icon: "diet",
    name: "تغذیه",
    bgColor: "bg-green-500",
  },
  {
    path: "#",
    icon: "activity",
    name: "فعالیت بدنی",
    bgColor: "bg-red-500",
  },
  {
    path: "#",
    icon: "health",
    name: "سلامت و روان",
    bgColor: "bg-indigo-300",
  },
  {
    path: "#",
    icon: "sleep",
    name: "خواب",
    bgColor: "bg-sky-600",
  },
  {
    path: "#",
    icon: "notifications",
    name: "اطلاعیه‌ها",
    bgColor: "bg-primary",
  },
];

export type HomeFeature = (typeof featuresDetails)[number];

export const statuses = {
  weight: {
    normal: { label: "متناسب", color: "success", icon: "" },
    overweight: { label: "اضافه وزن", color: "warning", icon: "" },
    underweight: { label: "کمبود وزن", color: "warning", icon: "" },
    fat: { label: "چاقی", color: "error", icon: "" },
  },
  height: {
    normal: { label: "متناسب", color: "success" },
    shortForAge: { label: "کوتاه تر از حد معمول", color: "error" },
    tallForAge: { label: "بلند تر از حد معمول", color: "warning" },
  },
};
