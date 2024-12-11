export const formatJobDescription = (description: string): string[] => {
  const descriptionArr: string[] = description
    .slice(0, description.length - 1)
    .split(". ")
    .map((description) => "• " + description);
  return descriptionArr;
};
