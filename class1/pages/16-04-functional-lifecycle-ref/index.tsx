import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"


export default function MyLifecyclePage(){
    const router = useRouter();
    
    const inputRef = useRef<HTMLInputElement>(null); //초기값을줘야함. 
    const [count, setCount] = useState(0);

        //componentDidMount와 동일
        useEffect(() =>{
            console.log("마운트된")
            inputRef.current?.focus()

            //componetWIllUnmonut와 동일
            return () => {
                console.log("잘가요~")
            } 

        }, [] );


        useEffect(() =>{
            console.log("수정됨!!");          
        });




    function onClickCounter(){
        setCount(prev => prev + 1)
    };

    function onClickMove(){
        router.push("/")
    };

    return(
        <>
        <input type="text" ref={inputRef}/>
           <div>현재카운트: {count}</div>
           <button onClick={onClickCounter}>카운트 올리기!!!</button>
           <button onClick={onClickMove}>페이지이동하기</button>
           
       </>

    )
}