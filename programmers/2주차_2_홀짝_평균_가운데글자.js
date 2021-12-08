//1.  https://programmers.co.kr/learn/courses/30/lessons/12937
// 짝수와 홀수
// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

function solution(num) {
    return num % 2 ? "Odd" : "Even";
  }
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  // console.log("결과 : " + evenOrOdd(2));
  // console.log("결과 : " + evenOrOdd(3));

  // ++++ 삼항 조건 연산자
//   삼항 조건 연산자
//   조건부 삼항 연산자는 JavaScript에서 세 개의 피연산자를 취할 수 있는 유일한 연산자입니다. 
//   맨 앞에 조건문 들어가고. 그 뒤로 물음표(?)와 조건이 참truthy이라면 실행할 식이 물음표 뒤로 들어갑니다. 
//   바로 뒤로 콜론(:)이 들어가며 조건이 거짓falsy이라면 실행할 식이 마지막에 들어갑니다. 
//   보통 if 명령문의 단축 형태로 쓰입니다.


  --
  //2.    https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript

//   평균 구하기
// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
//mento

function solution(arr){
    let sum = 0;
    
    for( let i = 0; i < arr.length; i++){
        sum = sum = arr[i];
        //sum += arr[i]
        
    // console.log(arr)
    // return answer;
    }
    return sum / arr.length
    //ㅊㅇ합에서 배열의 길이 만큼 나눠주면 평균값
}

//---- 프로그래머스 기타답들
  function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}



//--




function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}

//----
function solution(s) {
    var length = s.length;
    var answer = '';

    if(!(s.length >0 && s.length<100)) {
        return;
    }

    if(length % 2 != 0) {
        answer += s.slice(length/2, length/2 +1);
    }else {
        answer += s.slice(length/2 -1, length/2 +1);
    }

    return answer;

}

var s = 'qwerty';
console.log(solution(s));


