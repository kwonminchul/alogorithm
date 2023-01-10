/*
    시험 성적
    
    시험 점수를 입력받아 90 ~ 100점은 A,
    80 ~ 89점은 B,
    70 ~ 79점은 C,
    60 ~ 69점은 D,
    나머지 점수는 F를 출력하는 함수를 완성하세요.

    단, 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수입니다.
*/

function score(num) {
  //   if (num >= 90 && num <= 100) {
  //     return "A";
  //   } else if (num >= 80 && num <= 89) {
  //     return "B";
  //   } else if (num >= 70 && num <= 79) {
  //     return "C";
  //   } else if (num >= 60 && num <= 69) {
  //     return "D";
  //   } else num >= 0 && num <= 59;
  //   return "F";
  if (num >= 90) {
    return "A";
  } else if (num >= 80) {
    return "B";
  } else if (num >= 70) {
    return "C";
  } else if (num >= 60) {
    return "D";
  } else {
    return "F";
  }
}
