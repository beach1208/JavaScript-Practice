//557.Reverse Words in a String III
//Example 1:
//Input: "Let's take LeetCode contest"
//Output: "s'teL ekat edoCteeL tsetnoc"
var reverseWords = function(s) {
  return s
    .split(" ")
    .map(word =>
      word
        .split("")
        .reverse()
        .join("")
    )
    .join(" ");
};
