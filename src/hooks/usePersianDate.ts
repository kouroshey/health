export default function usePersianDate(
  inputDate?: Date,
  options: Partial<Intl.DateTimeFormatOptions> = {},
): string {
  const {
    year = "numeric",
    month = "2-digit",
    day = "2-digit",
    calendar = "persian",
  } = options;
  const formatOptions = { year, month, day, calendar };

  const dateToFormat = inputDate || new Date();

  const date = new Intl.DateTimeFormat(
    "fa-IR-u-ca-persian",
    formatOptions,
  ).format(dateToFormat);

  return date.replace(/[۰-۹]/g, (char) => persianToEnglishMap[char]);
}

export const persianToEnglishMap = {
  "۰": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9",
};
