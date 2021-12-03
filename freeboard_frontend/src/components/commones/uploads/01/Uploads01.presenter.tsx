import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

// // 기존 => 수정 기능이 없을때
// {props.fileUrl ? (
//   <UploadImage
//     onClick={props.onClickUpload}
//     src={`https://storage.googleapis.com/${props.fileUrl}`}
//   />) : (
//     <UploadButton onClick={props.onClickUpload}>
//       <>+</>
//       <>Upload</>
//     </UploadButton>
// )}

// // 변경됨 => 수정 기능이 있을때
// // 1. 기존에 이미 등록됐던 사진: 강아지.jpg - props.defaultFileUrl
// // 2. 수정하려고 변경한 사진: 고양이.png - props.fileUrl
// // 따라서, 수정하려고 변경한 사진(고양이.png)이 사전에 등록했던 사진(강아지.jpg)보다 앞에 나와야함 - 그렇지 않으면 항상 강아지.jpg만 나옴
// {props.fileUrl || props.defaultFileUrl ? (
//   <UploadImage
//     onClick={props.onClickUpload}
//     src={
//       props.fileUrl
//         ? `https://storage.googleapis.com/${props.fileUrl}`
//         : `https://storage.googleapis.com/${props.defaultFileUrl}`
//     }
//   />) : (
//     <UploadButton onClick={props.onClickUpload}>
//       <>+</>
//       <>Upload</>
//     </UploadButton>
// )}

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <>
      {props.fileUrl || props.defaultFileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={
            props.fileUrl
              ? `https://storage.googleapis.com/${props.fileUrl}`
              : `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
