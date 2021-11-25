
import { useEffect, useState } from "react"


export default function UseEffectDependencyArratPage(){
    console.log("랜더링시작!!")
    const [count, setCount] = useState(0);

    // 1qjs 케이스  최초 1번 실행(= DidMount)
    // useEffect(() =>{ 
    //     console.log("최초 한번 실행됨!!!")
    // }, [] )

    // 2번케이스   -의존성 배열의 count 감지후 재실행
    // useEffect(() =>{ 
    //     console.log("count가 변경되면 재실행!!")
    // }, [count] )

    // // 3번케이스  최초랜더링 + 1
    // useEffect(() =>{ 
    //     setCount(100);
    // }, [] );

    
    //// 4번케이스 무한으로 돌아서 컴퓨터가 뜨거워짐...   -무한루프
    // useEffect(() =>{ 
    //     setCount((prev) => prev + 1);
    // }, [count] );


    function onClickCounter(){
        setCount(prev => prev + 1)
    };

 

    return(
        <>        
           <div>현재카운트: {count}</div>
           <button onClick={onClickCounter}>카운트 올리기!!!</button>                    
       </>

    )
}