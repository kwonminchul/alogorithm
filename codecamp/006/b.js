/*

    배수 찾기

    함수 isMultiple에 정수 n과 정수가 담긴 배열 arr이 주어졌을 때, 
    배열에 들어있는 수가 n의 배수면 true, 아니라면 false를 배열에 담아 리턴하세요. 

    단 정수 n과 배열에 담긴 정수는 0보다 크고 1000보다 작습니다. 

    입출력 예시
    -------------------------------------------------------------
    input                       output
    -------------------------------------------------------------
    n           arr
    -------------------------------------------------------------
    3   [1, 7, 99, 321, 777]    [false, false, true, true, true]
*/

function isMultiple(n, arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] % n === 0) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  return answer;

  //   function isMultiple(n, arr) {
  //     return arr.map((e) => e % n === 0)
  //   }
}
