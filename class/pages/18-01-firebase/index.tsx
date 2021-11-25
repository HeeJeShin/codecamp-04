import{
    collection, getFirestore, addDoc, getDocs
} from 'firebase/firestore/lite'

import {firebaseApp} from '../_app'

export default function FirebasePage(){
    
    async function onClickSubmit(){     
        const product = collection(getFirestore(firebaseApp), "product");
        await addDoc(product, {
            seller: "영희",
            name:"마우스!!",
            contents:"좋은마우스!!!",
        })
    }

    async function onClickFetch(){
        const product = collection(getFirestore(firebaseApp), "product");
        const result = await getDocs(product)
        const docs = result.docs.map(el => el.data())
        console.log(docs);
    }

    return(
        <>
            <div>파이어베이스 연습페이지입니다</div>
            <button onClick={onClickSubmit}>등록하기</button>
            <button onClick={onClickFetch} >불러오기</button>
        </>
    );
}