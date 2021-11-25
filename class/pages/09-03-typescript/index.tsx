export default function TypescriptPage(){

    // 문자타입 - 타입추론
    let aaa = "안녕하세요"
    aaa = 3


    //문자타입
    let bbb: string;
    bbb = "반갑습니다"
    bbb = 123 // 문자상자이기 떄문에 오류남.. 
    
    
    //숫자타입
    let ccc: any = 5   //상자이름 : 타입 = 식의 값
    ccc = "asdf"

    //배열타입
    let ddd : number[] = [1, 2, 3, 4, 5, 6]     //자동으로 타입추론 배열로 마우스대보면 배열은 배열인데 숫자들로 이루어진 배열이라고 뜬다. 
    ddd = ["ss","dd","aa"]  //안된다 ddd는 숫자배열이기 때문이다. 
    let eee : string[] = ["a","b","c"]
    let fff: number[] | string[] = [1,2,4,3,4]   //tys에서는 |가 하나  union 타입이라고함.
    fff = ["a","b","c"]
    let ggg:(number | string)[] = [1, "b", 2, "c"]   //이게 좋겠네

    //객채타입

    interface Iprofile{
        name: string
        age: number | string
        school: string
    }

    let profile : Iprofile = {
        name: "철수",
        age: 7,
        school: "다람쥐초등학교"
    }
    profile.age = "8살"
    profile.school = 3  //string


 
 
    return <div>타입스크립트 연습</div>
}   