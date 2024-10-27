export default function usePersianDate(): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    calendar: "persian",
  };
  const date = new Intl.DateTimeFormat("fa-IR-u-ca-persian", options).format(
    new Date(),
  );

  return date.replace(/(\d{4})\/(\d{2})\/(\d{2})/, "$1/$2/$3");
}
