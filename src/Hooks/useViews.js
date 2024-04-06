function useViews(views) {
  let num = parseInt(views);
  const suffixes = ["", "K", "M", "B", "T"];

  let i = 0;
  while (num >= 1000 && i < suffixes.length - 1) {
    num /= 1000;
    i++;
  }

  const formattedNum = num.toFixed(1).replace(/\.0$/, "");

  return formattedNum + suffixes[i];
}
export default useViews;
