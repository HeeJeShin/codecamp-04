import { useState } from "react"

export default function StatePrevPage(){
    const [count, setCount] = useState(0);

    function onClickCount(){
        //1.화살표함수
        // setCount((prev) => prev + 1);
        //셋카운트라는 콜백함수에 화살표함수를 넣어준것
        //2. 그냥함수
        // setCount(function(prev){
        //     //로직추가하기 const aaa =3
        //     //로직추가하기
        //     return prev + 1
        // });
        //3.화살표 함수에서 매개변수 바꾸기
        setCount((qwer) => qwer + 1);
    }

    return(
        <>
        <div>현자카운트:{count}</div>
        <button onClick={onClickCount}>카운트 증가!!</button>
        </>
    )
}