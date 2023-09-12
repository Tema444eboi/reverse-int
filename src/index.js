module.exports = function reverse (n) {
  var result = '';
  
  while(number>0){
   result = result + (number%10);
   number = parseInt(number/10);
  }
  
  return result;
}
