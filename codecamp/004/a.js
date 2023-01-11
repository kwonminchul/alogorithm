/*
    isBig ?
    함수 isBig에 세 정수 a, b, c가 주어질 때
    a가 제일 큰 수 인지를 판별해 true, false를 리턴하세요.

    단, a가 제일 큰 수 이면서, 동일한 값이 있을 경우 true를 리턴하세요. 

    input       output
    ------------------
    a  b  c
    ------------------
    3, 4, 5     false
    2, 2, 1     true
*/

function isBig(a, b, c) {
  return Math.max(a, b, c) === a;

  //   const array = [a, b, c];
  //   const NewArray = array.sort();
  //   return NewArray[array.length - 1] === a ? true : false;

  //   if (a > b && a > c) {
  //   } else if (a === b || a === c) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}
