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
