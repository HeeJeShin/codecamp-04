import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

export default function ImageUploadPreviewSubmitPromiseallPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [myFiles, setMyFiles] = useState([ ])
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  function onChangeFile(event) {
    const myFiles = event.target.files[0];
    console.log(myFiles);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFiles);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target?.result);
      setMyFiles(prev => [...prev,myFiles])
    };
  }

  async function onClickSubmit() {
    let myImageUrls = ["","",""]
    // 1.파일업로드
    if(myFiles.length){ 
      // //1. 각각 올리기 테스트
      //   const start = performance.now()
      //   await uploadFile({ variables: { file: myFiles[0] }})
      //   await uploadFile({ variables: { file: myFiles[0] }})
      //   await uploadFile({ variables: { file: myFiles[0] }})
      //   await uploadFile({ variables: { file: myFiles[0] }})
      
      //   const end = performance.now();
      //   console.log(end - start)

        // //2. 동시에 올리기 테스트
        // const start = performance.now()
        // // Promise.all([ ... ]) vs Promise.race([ ... ])
        // const result = await Promise.all([ // Promise.rage
        //   uploadFile({ variables: { file: myFiles[0] }}),
        //   uploadFile({ variables: { file: myFiles[0] }}),
        //   uploadFile({ variables: { file: myFiles[0] }}),
        //   uploadFile({ variables: { file: myFiles[0] }}),
        //   uploadFile({ variables: { file: myFiles[0] }}),
         
        // ])
       
        const end = performance.now();
        console.log(end - start)

        // result = [result1, result2, result3, .... result10]
        //  myImageUrls = result.map((el) => el.data.uploadFile.url) => [url1, url2, url3,.... ,url10]
         myImageUrls = result.map((el) => el.data?.uploadFile.url)
        


        // const result1 = await uploadFile({
        //     variables: {
        //       file: myFiles[0],
        //     },
        // });
        // myImageUrls[0] = result1.data?.uploadFile.url || "";
        // const result2 = await uploadFile({
        //   variables: {
        //     file: myFiles[1],
        //   },
        // });
        // myImageUrls[1] = result1.data?.uploadFile.url || "";
        // const result3 = await uploadFile({
        //   variables: {
        //     file: myFiles[2],
        //   },
        // });
        // myImageUrls[2] = result1.data?.uploadFile.url || "";
    }

    

      // 2. 업로드된파일로 게시물등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요",
          contents: "이미지 업로드 연습중입니다",
          images: [...myImageUrls],
        },
      },
    });
    console.log(result2.data?.createBoard._id)
  }

  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
