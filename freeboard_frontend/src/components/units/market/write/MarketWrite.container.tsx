import { useRouter } from "next/router"
import { useState } from "react";
import MarketWriteUI from "./MarketWrite.presenter"




const MarketWrite = () => {
    const router = useRouter();

    // const[myName, setMyName] = useState("");
    const[myRemarks, setMyRemarks] = useState(""); 
    const[myContents, setMyContents] = useState("");
    const[myPrice, setMyPrice] = useState("");
    const[myTags, setMyTags] = useState("");
    const[myImages, setMyImages] = useState("");
    


    return<MarketWriteUI/>

}
export default MarketWrite