/*

    광고

    광고 효과가 주어졌을 때, 광고를 해야할지 말아야할지 결정하는 프로그램을 작성해주세요.
    함수 advertise에 3개의 정수 r, e, c가 주어집니다. 
    r은 광고를 하지 않았을 때 수익, e는 광고를 했을 때의 수익, c는 광고 비용입니다. 

    광고를 해야 하면 "advertise", 하지 않아야 하면 "do not advertise", 광고를 해도 수익이 차이가 없다면 "does not matter"를 리턴해주세요.
    
    입출력 예시
    -----------------------
    input          output
    -----------------------
    r   e   c   
    -----------------------
    0  100  70  "advertise"
*/

function advertise(r, e, c) {
  if (r < e && r + e > c && e - r > c) {
    return "advertise";
  } else if ((r = e && r + e <= c)) {
    return "do not advertise";
  } else {
    return "does not matter";
  }

  // function advertise(r, e, c) {
  //     if (e - c > r) return 'advertise'
  //     if (e - c < r) return 'do not advertise'
  //     return 'does not matter'
  //   }
}
