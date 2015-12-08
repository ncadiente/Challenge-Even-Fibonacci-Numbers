/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};

function _sumFibs( maxFibValue ) {
  var firstFib= 0;
  var secondFib= 1;
  var nextFib= 0;
  var sum = 0;
  // do your work here
  while (nextFib <= maxFibValue){
    nextFib = firstFib + secondFib;
    if (nextFib%2 === 0){
      sum+= nextFib;
    }
    firstFib = secondFib;
    secondFib = nextFib;
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var firstFib= 0;
  var secondFib= 1;
  var nextFib = 0;
  var highest = 0;
  //define your base case, validate your input
  while (nextFib < maxFibValue){
    nextFib = firstFib + secondFib;
    firstFib = secondFib;
    secondFib = nextFib;
  }
  highest = firstFib;
  //do your work here
  return highest;
}