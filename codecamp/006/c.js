/*
    includes 함수를 직접 구현해보는 문제입니다. 
    includes 함수를 사용하시면 안 됩니다!!
    
    base에는 배열이나 문자열이 들어올 수 있습니다. 
    value에는 찾고자하는 값(숫자, 문자열)이 담겨있습니다. 
    base가 value를 포함하고 있는지 boolean으로 리턴해주세요.
    단, value에 문자열이 주어질 때, 그 길이는 1입니다.(한글자)
    예) base에 [1, 2, 3]이 주어지고, value에 3이 주어질 때 => true
        base에 "abcd"가 주어지고, value에 "e"가 주어질 때 => false
    
*/

function myIncludes(base, value) {
  return base.indexOf(value) !== -1;

  // function myIncludes(base, value) {
  //     const myResult = [];
  //     for (let i = 0; i < base.length; i++) {
  //       if (base[i] === value) myResult.push(1);
  //     }
  //     return myResult.length === 0 ? false : true;
  //   }
}
