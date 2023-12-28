export const shortenText = (text, n) => {
  if (text.length > n) {
    const editText = text.substring(0, n).concat("...");
    return editText;
  }

  return text;
};
