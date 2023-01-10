/*
    KDA

    어떤 게임에서 플레이한 것에 대한 점수를 K, D, A로 나타내고 있습니다.
    이는 Kill/Death/Assist에 대한 수치를 각각 나타냅니다. 
    
    조아라 멘토가 이 게임에서 진정한 고수인지를 kda 함수를 작성해 판별해주세요.
    kda 함수는 배열 array를 매개변수로 받습니다. 이 배열에는 K, D, A 점수가 순서대로 들어갑니다. 
    K + A < D 이거나, D = 0 이면 "hasu"를 리턴해주세요. 이외에는 "gosu"를 리턴해주세요.
    
    입출력 예시 )
    input       output
    -----------------------
    [0, 5, 3]   "hasu"
    [12, 4, 5]  "gosu"
    [0, 0, 1]   "hasu"
    
    제한 조건 )
    K, D, A는 모두 정수입니다.
    0 <= K, D, A <= 20
*/

function kda(array) {
  const [k, d, a] = array; // 구조분해할당
  return k + a < d || d === 0 ? "hasu" : "gosu";
  // const k = array[0];
  // const d = array[1];
  // const a = array[2];
  // return k + a < d || d === 0 ? "hasu" : "gosu";
  // const k = array[0];
  // const d = array[1];
  // const a = array[2];
  // if (k + a < d || d === 0){
  //     return "hasu"
  // }
  // return "gosu"
}
