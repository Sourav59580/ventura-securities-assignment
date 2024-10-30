interface IssueDates {
  start: string;
  end: string;
}

// Function to get the ordinal suffix for a number
function getOrdinalSuffix(day: number): string {
  const suffixes = ["th", "st", "nd", "rd"];
  const modulo10 = day % 10;
  const modulo100 = day % 100;

  if (modulo10 === 1 && modulo100 !== 11) return "st";
  if (modulo10 === 2 && modulo100 !== 12) return "nd";
  if (modulo10 === 3 && modulo100 !== 13) return "rd";
  return "th";
}

// Function to format the date range
export function formatDateRange(issueDates: IssueDates): string {
  const startDate = new Date(issueDates.start);
  const endDate = new Date(issueDates.end);

  const dayStart = startDate.getDate();
  const dayEnd = endDate.getDate();
  const month = startDate.toLocaleString("default", { month: "short" });
  const year = startDate.getFullYear();

  return `${dayStart}${getOrdinalSuffix(dayStart)}-${dayEnd}${getOrdinalSuffix(
    dayEnd
  )} ${month} ${year}`;
}
