/*
    윷 놀이

    우리나라 고유의 윷놀이는 네 개의 윷짝을 던져서 배(0)와 등(1)이 나오는 숫자를 세어 도, 개, 걸, 윷, 모를 결정합니다. 
    네 개 윷짝을 던져서 나온 각 윷짝의 배 혹은 등 정보가 담긴 배열 arr이 함수 playYut에 매개변수로 주어집니다. 
    도(배 한 개, 등 세 개), 개(배 두 개, 등 두 개), 걸(배 세 개, 등 한 개), 윷(배 네 개), 모(등 네 개) 중 어떤 것인지를
    상황에 맞게 '도', '개', '걸', '윷', '모'를 리턴하세요.

    입출력 예시
    -----------------------
    input           output
    -----------------------
    [0, 1, 0, 1]    '개'

*/

function playYut(arr) {
  const answerArr = ["모", "도", "개", "걸", "윷"];
  return answerArr[arr.filter((e) => !e).length];

  // function playYut(arr) {
  //     const myYut = arr.filter((e) => e === 0);
  //     if (myYut.length === 1) {
  //       return "도";
  //     }
  //     if (myYut.length === 2) {
  //       return "개";
  //     }
  //     if (myYut.length === 3) {
  //       return "걸";
  //     }
  //     if (myYut.length === 4) {
  //       return "윷";
  //     } else {
  //       return "모";
  //     }
  //   }
}
