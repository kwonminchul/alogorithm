/*
    filter 함수를 구현해보세요.
    🚨 filter 메소드를 사용하시면 안됩니다!!

    함수 myFilter는 배열 array와 함수 callbackFn을 매개변수로 받습니다.

    callbackFn은 두 가지 매개변수를 받습니다. 
        callbackFn(element, index)
    주어진 element와 index를 가지고 조건에 맞는지 판별해 
    true 또는 false를 리턴하는 함수입니다. 

    myFilter 함수에 주어진 array의 각 요소와 그 인덱스를 callbackFn에 넘겨주어 
    callbackFn 함수가 true를 리턴하는 요소들만 모아서 
    새로운 배열을 리턴해주세요.

    element는 배열에서 판별할 한개의 요소를 주어야합니다.
    index는 그 요소의 인덱스 값을 주어야합니다. 

    입출력 예시 )
    input 
    -----------------------------------------------
    const array = [0, 1, 2, 3]
    const callbackFn = (element, index) => {
        return element % 2 === 0
    }
    - element가 짝수일 경우 true를 리턴, 그 외는 false 리턴
    
    output
    ------
    [0, 2]
    
    제한조건 ) 
    Array의 filter() 함수를 사용하지 마세요.
    callbackFn의 조건은 테스트 케이스마다 달라집니다. 
*/

function myFilter(array, callbackFn) {
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i], i)) answer.push(array[i]);
  }
  return answer;

  //   let answer = [];
  //   array.forEach((e, el) => {
  //     if (callbackFn(e, el)) answer.push(e);
  //   });
  //   return answer;
}
