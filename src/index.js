module.exports = function reverseint(x) {
  if (x < 0) return -reverseint(-x);
  var str = x.toString();
  var strArray = str.split("");
  var revArray = strArray.reverseint();
  var rev = revArray.join("");
  return Number(rev);
};
