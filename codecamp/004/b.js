/*

    영수증

    새 학기를 맞아 재훈이는 책을 10권 구입했습니다. 
    의욕이 너무 앞서서 가격을 조사하지 않고 책을 구입했고, 이제 각 책의 가격을 알아보려고 합니다.
    하지만, 영수증에는 얼룩이 묻어있었고, 책 10권 중 9권의 가격만 읽을 수 있었습니다.

    함수 receipt에 책 10권의 총 가격인 total과 가격을 읽을 수 있는 9권 가격이 담긴 배열 priceArr이 주어졌을 때, 
    가격을 읽을 수 없는 책의 가격을 구해 리턴하세요. 

    단, 책의 가격은 10,000이하인 양의 정수입니다. 

    입출력 예시
    --------------------------------------------
    input                               output
    --------------------------------------------
    total   priceArr
    --------------------------------------------
     10     [1, 1, 1, 1, 1, 1, 1, 1, 1]     1

*/

function receipt(total, priceArr) {
  let Price = 0;
  for (let i = 0; i < priceArr.length; i++) {
    Price = Price + priceArr[i];
  }
  return total - Price;

  // return total - priceArr.reduce((e, el) => e + el, 0);
}
