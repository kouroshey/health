export default function usePersianDate(
  inputDate?: Date,
  options: Partial<Intl.DateTimeFormatOptions> = {},
): string {
  const {
    year = "numeric",
    month = "2-digit",
    day = "numeric",
    calendar = "persian",
  } = options;
  const formatOptions = { year, month, day, calendar };

  const dateToFormat = inputDate || new Date();

  const date = new Intl.DateTimeFormat(
    "fa-IR-u-ca-persian",
    formatOptions,
  ).format(dateToFormat);

  return date.replace(/(\d{4})\/(\d{2})\/(\d{2})/, "$1/$2/$3");
}
