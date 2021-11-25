import { firebaseApp } from "../_app";
import {collection, getFirestore, addDoc} from "firebase/firestore/lite"

export default function FirebaseboardsPage(){

    function onClickSubmit(){
        const product = collection(getFirestore(firebaseApp), "product");
        addDoc(product,{
            seller: "",
            name:
        })
    }


    return(
        <>
            <div>파이어베이스</div>
            <button onClick={onClickSubmit}>누르는 버튼</button>
        </>
    );
}