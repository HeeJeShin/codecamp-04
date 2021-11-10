//-------------- 문자열을 정수로 바꾸기------------
// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// 입출력 예
// 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.
// #include <stdio.h>
// #include <stdbool.h>
// #include <stdlib.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
// int solution(const char* s) {
//     int answer = 0;
//     return answer;
// }

function strToInt(str){
    return str/1
    }
    console.log(strToInt("-1234"));

//     배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

//mento ver
function solution(arr){
    let answer = [];
    
    for( let i = 0; i < arr.length; i = i + 1){
        // 아이가 영이고 arr의 끝값이 정의한 i보다 작고 i는 하나씩 커질때
       
        if(answer[answer.length - 1]!==arr[i]){
            // answer은 앤써의 끝줄에서 빼기 일해준 값이 arr의 값과 같지않응ㄹ때
            answer.push( arr[i])
        }  // 앤써에 아이를 하나씩 넣어준다. ~
        // if( arr[i] !== arr[i + 1] ){
        //     answer.push( arr[i] )
        // }      
       
    }

    return answer;
}



// 핸드폰 번호 가리기
// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 4 이상, 20이하인 문자열입니다.
// 입출력 예
function solution(phone_number) {
    let answer = '';
    
    
    for(let i = 0 ; i < phone_number.length; i = i + 1){
        
        if(i < phone_number.length - 4){ //전체에서 이길이값
            answer = answer + '*'
        } else{
            answer = answer + phone_number[i]
        }
    }
    return answer;
    
}

//메써드 방법
function solution(phone_number) {
    let answer = ""  //엔써를 빈문자열로 만들어주고. 
    answer = answer.padStart(phone_number.length - 4,"*")
    //엔써는 엔써의 패드스타트에서 폰넘버개수에서 뒤에서 네개를 뺴고 별로 채워준다?
    answer += phone_number.slice(phone_number.length - 4, phone_number.length)  //슬라이스는 문자열에서 첫번째(인덱스 영부터시작) 어디까지(이건일부터) 지운다.  
    // 랭스값은 인덱스값보다 항상 하나가 많다 그러니까여기서는 마이나스일을 안해도 되지. ! 
    // 어려운거맞으니까 포문으로 풀고 매써드 방식으로 바꿔주는 연습이 피요하다. 
    console.log(answer)
}
    


//---------------------------------------- 

// 2day
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


// ----

//3.   https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript

// 가운데 글자 가져오기
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
    //var answer = '';
    let center = Math.floor(s.length / 2);
    let answer = s[center];
    
    if( s.length % 2 === 0){
        //짝수일 경우 가운데 2글자를 가져온다.
        
        answer = s[center - 1] + answer
    }
    
    
    //연습코드
    function solution(s){
        let center = " "
        if(s.length % 2 === 0)
    }
    
    
    return answer;
}


//=======================================
//3일차 수요일

//1번      https://programmers.co.kr/learn/courses/30/lessons/12919
// 서울에서 김서방 찾기
// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.
// 입출력 예
// seoul	return
// ["Jane", "Kim"]	"김서방은 1에 있다"

function solution(seoul) {
    //     let x =0; //김서방의 위치 인덱스 값을 저장 //2
        
    //     for( let i = 0; i< seoul.length; i++ ){//3
    //         //console.log(seoul[i])//4
    //         if( seoul[i] === "kim"){  //5
    //             x = i                   //6
    //         }
    //     }
    
        const x = seoul.indexOf( "Kim" );
        return `김서방은${x}에 있다` //7
         //return "김서방은" + x +"에 있다" //8
        
        //console.log(seoul)  //1
    }


//2번.            https://programmers.co.kr/learn/courses/30/lessons/12918  
// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true



// function solution(s) {
//     if(s.length !== 4 && s.length !== 6){   //1
//         return false                        //2
//     }
   
//     let answer = ture;                      //3
//     for(let i = 0; i < s.length; i++ ){     //5
//         //console.log(s[i])                   //6
//         if( isNaN( s[i]) === true ){        //7
//             //Number 타입으로 변환했을떄 문자열인 경우 true값을 반환 //  :숫자가안디ㅏ.
//         // isNaN의 기능 이것이 숫자가아니다 고로 숫자르 넣어주면 false 문자를 넣어주면 true 문자열 타입의 숫자가 들어와도 "2" 로 들어와도 false값이 들어온다.
//             answer = false;             //8
//             break;
//         }        
//     }
//     return answer;         //4  
    
// }



// 3.번    https://programmers.co.kr/learn/courses/30/lessons/12928
// 약수의 합
// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

//mento 메써드 버전..?
function solution(n){
    let answer = 0;
    
   // console.log( new Array(n).fill(1).forEach )    //1
    new Array(n)
        .fill(1)
        .forEach( (num, i) => {           //배열에서 반복문이 돌수있게 도와주는것. //3
            //console.log(num + i)                    //4
        if(n % (num + i ) === 0){
            answer += ( num + i )
        }
    })  
    return answer;
}

//mento ver.
// function solution(n){
//     let answer = 0;
    
//     for(let i = 1; i <= n; i++){    //1
//         //console.log(i)              //2
//         if( n % i === 0){                  //3
//             //console.log(n,i)            //4
//             answer += i
//         }
//     }
    
//     return answer;
// }



//for(초기값 , 조건식, 어떤 방법으로)
//배낀답
// founction solution(n){
//     let sum = 0;
//     for(let i =1; i <=n; i++){
//         if(n % i === 0)  sum = sum + i
//     }
//     return sum
// }
//코드 풀이 
// n이라는 함수의 값은?
//     썸이란는 것이 0 이라면;
// 반복해준다 일단 아이값이 일이고 아이는 엔이라는 값보다는 작거나 같고 아이가 하나씩 증가한다고 했을때
// {(만약에 엔을 아이로 나눈 값이 영이라면) 썸은 썸에 아이값을 더한다}
// 그값을 여달라
// }