function gregorianToJalali(date: Date): {
  year: number;
  month: number;
  day: number;
} {
  const gYear = date.getUTCFullYear();
  const gMonth = date.getUTCMonth() + 1;
  const gDay = date.getUTCDate();

  let jy: number;
  let jm: number = 0;
  let jd: number = 0;

  const gD = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const gy2 = gMonth > 2 ? gYear + 1 : gYear;
  let days =
    355666 +
    365 * gYear +
    (((gy2 + 3) / 4) | 0) -
    (((gy2 + 99) / 100) | 0) +
    (((gy2 + 399) / 400) | 0) +
    gDay +
    gD[gMonth - 1];

  jy = -1595 + 33 * ((days / 12053) | 0);
  days %= 12053;
  jy += 4 * ((days / 1461) | 0);
  days %= 1461;

  if (days > 365) {
    jy += ((days - 1) / 365) | 0;
    days = (days - 1) % 365;
  }

  const jM = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336, 365];
  for (let i = 0; i < 13; i++) {
    if (days < jM[i + 1]) {
      jm = i + 1;
      jd = days - jM[i] + 1;
      break;
    }
  }

  return { year: jy, month: jm, day: jd };
}

export function dateToJalali(date: string) {
  const d = gregorianToJalali(new Date(date));
  const jalaliDate = `${d.year}/${d.month}/${d.day}`;
  return jalaliDate;
}
