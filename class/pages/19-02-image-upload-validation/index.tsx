import  {gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";


const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }
`;

export default function ImageUploadPage(){
        const [ , setMyImages] = useState<String[]>([])
        const [uploadFile] = useMutation(UPLOAD_FILE)


    async function onChangFile(event:ChangeEvent<HTMLInputElement>){
        const myFile = event.target.files?.[0]; //있을때
        console.log(myFile);
    
        if(!myFile?.size){
            alert("파일이 없습니다.")
            return;
        }

        if(myFile.size > 5 * 1024 * 1024){
            alert("파일 용량이 너무 큽니다. (제한: 5mb)")
            return;
        }

        if(!myFile.type.includes("jpeg") && !myFile.type.includes("png")){
            alert("jpeg 또는 png만 업로드가능합니다!!")
        }

    const result = await uploadFile({
        variables:{
            file: myFile
        },
    })
        console.log( result.data.uploadFile.url)
        setMyImages([result.data.uploadFile.url])
    }   
    return(
        <input type="file" onChange={onChangFile}/>
    );
}