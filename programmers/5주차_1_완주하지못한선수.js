// https://programmers.co.kr/learn/courses/30/lessons/42576

// 완주하지 못한 선수
// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
// 입출력 예
// participant	completion	return
// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"

function solution(participant, completion) {
    participant.sort(); //참가자 배열 정렬 오름차순.
    completion.sort(); //완주자 배열 정렬
    for(let i=0 ; i<participant.length ; i++ ){
        if(participant[i] !== completion[i]){
            //인덱스 0부터 순차적으로 두 배열 비교
            return participant[i];
            //비완주자가 참가자 배열에 나올 경우 출력
        }
    }
}

// 메써드 방법

function solution(participant, completion) {
    participant.sort(); //참가자 배열 정렬 오름차순.
    completion.sort(); //완주자 배열 정렬

    const answer = participant.filter( (name, i) => {
        // console.log(name, completion[i])
        return name !== completion[i]
    }) 
    // console.log(answer) 확인 
    return answer[0] //맨앞에 있는 사람
}
