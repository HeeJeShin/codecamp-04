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