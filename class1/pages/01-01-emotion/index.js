import { MyDiv, MyInput } from '../../styles/emotion'

export default function EmotionPage(){

    return (
        <>
            <MyDiv>안녕하세요~~</MyDiv>
            이메일: <MyInput type="text" /><br />
            비밀번호: <MyInput type="text" />
            나의이미지: <img src="/images/lotto.png" />
        </>
    )
    
}