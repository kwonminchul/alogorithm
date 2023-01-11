/*
    팩토리얼
    
    함수 factorial에는 0보다 크거나 같은 정수 num이 주어집니다. 
    이때, num의 팩토리얼을 리턴해주세요.
    팩토리얼은 그 수보다 작거나 같은 모든 양의 정수의 곱을 말합니다.
    예를 들어 3의 경우 (3 * 2 * 1) 이므로 6이 됩니다.
    제한사항 ) 
    정수 num
    (0 ≤ num ≤ 12)
    단, 0의 팩토리얼은 1입니다.
    입출력 예시 )
    input   output
    ---------------
    3       6
    10      3628800
    
*/

function factorial(num) {
  let answer = 1;
  for (let i = 1; i <= num; i++) {
    answer *= i;
  }
  return answer;

  // if (num === 0) return 1;
  // return new Array(num).fill(1).reduce((p, _, i) => p * (i + 1));
}
