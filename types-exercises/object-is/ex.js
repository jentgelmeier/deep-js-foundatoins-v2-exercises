// TODO: define polyfill for `Object.is(..)`

Object.is = function ObjectIs(one, two) {
  if (Number.isNaN(one) && Number.isNaN(two)) {
    return true
  } 

  if (isItNegZero(one) || isItNegZero(two)) {
    return isItNegZero(one) && isItNegZero(two)
  } 
  
  if (one === two) {
    return true
  } 

  return false
}

function isItNegZero(x) {
  return x === 0 && (1 / x) === -Infinity;
}


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);


