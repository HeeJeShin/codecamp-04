import  {gql, useMutation } from "@apollo/client";
import { ChangeEvent } from "react";

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }
`;

export default function ImageUploadPage(){
        const [uploadFile] = useMutation(UPLOAD_FILE)

    async function onChangFile(event:ChangeEvent<HTMLInputElement>){
        const myFile = event.target.files?.[0]; //있을때
        console.log(myFile);
    

    const result = await uploadFile({
        variables:{
            file: myFile
        },
    })
    console.log( result.data.uploadFile.url)
    }   
    return(
        <input type="file" onChange={onChangFile}/>
    );
}