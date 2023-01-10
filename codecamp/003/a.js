/*
    직각삼각형

    함수 triangle에 세변의 길이(a, b, c)가 주어집니다. 
    a의 제곱 + b의 제곱이 c의 제곱이면 직각 삼각형입니다. 

    삼각형이 직각삼각형이라면 "right", 아니라면 "wrong"을 리턴하세요.

*/

function triangle(a, b, c) {
  return a * a + b * b === c * c ? "right" : "wrong";
  // if (a * a + b * b === c * c) {
  //   return "right";
  // } else {
  //   return "wrong";
  // }
}
