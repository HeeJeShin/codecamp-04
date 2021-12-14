import { useEffect, useRef, useState } from "react"

export default function ImagePreloadPage(){
    const [myLoadedImage, setMyLoadedImage] = useState()
    const divRef = useRef(null)

    useEffect(() => {
        const img = new Image()
        img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp"
        img.onload = () => {
            setMyLoadedImage(img)
        }

    }, [])

    function onClickButton(){
        divRef.current?.appendChild(myLoadedImage)
        
    }

    return(
        <>
            <h1>메뚜기 월드에 오신것을 환영합니다~ ♪</h1>
            <div ref={divRef}></div>
            <button onClick={onClickButton}>이미지 보여주기</button>
            {/* <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp"/> */}
        </>
    )
}