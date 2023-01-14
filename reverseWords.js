function reverseWords(str) {
  return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
}
