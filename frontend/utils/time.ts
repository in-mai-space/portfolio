export const formatTime = (startDate: Date, endDate?: Date): string => {
  const end: string = endDate
    ? endDate.toLocaleString("en-US", { month: "long", year: "numeric" })
    : "Present";
  const start: string = startDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  return `${start} - ${end}`;
};
