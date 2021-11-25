import  {gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";


const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }
`;

export default function ImageUploadPage(){
        const fileRef = useRef<HTMLInputElement>()
        const [ myImages, setMyImages] = useState<String[]>([])
        const [uploadFile] = useMutation(UPLOAD_FILE)


    async function onChangFile(event:ChangeEvent<HTMLInputElement>){
        const myFile = event.target.files?.[0]; //있을때
        console.log(myFile);           

    const result = await uploadFile({
        variables:{
            file: myFile
        },
    });
        console.log( result.data.uploadFile.url)
        setMyImages([result.data.uploadFile.url])
    }   

    function onClickMyImage(){
        fileRef.current?.click();
    }
    return(
        <>
            <div 
                style={{width: '50px', height: '50px', backgroundColor: "gray"}} 
                onClick={onClickMyImage} >
                    이미지선택
            </div>
            <img src={`https://storage.googleapis.com/${myImages[0]}`} />
            <input 
                style={{display: "none"}} 
                type="file" 
                ref={fileRef} 
                onChange={onChangFile}
            />
        </>
    );
}