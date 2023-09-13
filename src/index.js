module.exports = function reverse(num) {
  if (num < 0) return -reverse(-num);
  var str = num.toString();
  var strArray = str.split("");
  var revArray = strArray.reverse();
  var rev = revArray.join("");
  return Number(rev);
};
