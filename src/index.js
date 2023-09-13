module.exports = function reverseint(x) {
  if (x < 0) return -reverse(-x);
  var str = x.toString();
  var strArray = str.split("");
  var revArray = strArray.reverse();
  var rev = revArray.join("");
  return Number(rev);
};
