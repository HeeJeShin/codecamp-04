import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { ChangeEvent, useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IboardWriteProps, IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IboardWriteProps) {
  const router = useRouter();

  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const fileRef = useRef<HTMLInputElement>();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [myWriterError, setMyWriterError] = useState("");
  const [myPasswordError, setMyPasswordError] = useState("");
  const [myTitleError, setMyTitleError] = useState("");
  const [myContentsError, setMyContentsError] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
    setMyWriter(event.target.value);
    if (event.target.value !== "") {
      setMyWriterError("");
    }

    if (
      event.target.value !== "" &&
      myTitle !== "" &&
      myContents !== "" &&
      myPassword !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
    if (event.target.value !== "") {
      setMyPasswordError("");
    }

    if (
      myWriter !== "" &&
      myTitle !== "" &&
      myContents !== "" &&
      event.target.value !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyTitle(event: ChangeEvent<HTMLInputElement>) {
    setMyTitle(event.target.value);
    if (event.target.value !== "") {
      setMyTitleError("");
    }

    if (
      myWriter !== "" &&
      event.target.value !== "" &&
      myContents !== "" &&
      myPassword !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
    setMyContents(event.target.value);
    if (event.target.value !== "") {
      setMyContentsError("");
    }

    if (
      myWriter !== "" &&
      myTitle !== "" &&
      event.target.value !== "" &&
      myPassword !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  function onClickAddressSearch() {
    setIsOpen((prev) => !prev);
  }

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  }

  // async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
  //   const myFile = event.target.files?.[0]; //있을때
  //   console.log(myFile);

  //   const result = await uploadFile({
  //     variables: {
  //       file: myFile,
  //     },
  //   });
  //   console.log(result.data.uploadFile.url);
  //   setMyImages([result.data.uploadFile.url]);
  // }



  async function onClickSubmit() {
    if (myWriter) {
      setMyWriterError("작성자를 입력해주세요.");
    }
    if (myPassword === "") {
      setMyPasswordError("비밀번호를 입력해주세요.");
    }
    if (myTitle === "") {
      setMyTitleError("제목을 입력해주세요.");
    }
    if (myContents === "") {
      setMyContentsError("내용을 입력해주세요.");
    }
    if (
      myWriter !== "" &&
      myPassword !== "" &&
      myTitle !== "" &&
      myContents !== ""
    ) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: myWriter,
            password: myPassword,
            title: myTitle,
            contents: myContents,
            youtubeUrl: youtubeUrl,
            images: fileUrls,
            boardAddress: {
              zipcode: zipcode,
              address: address,
              addressDetail: addressDetail,
            },
          },
        },
      });
      router.push(`/boards/${result.data.createBoard._id}`);
    }
  }
  interface IupdateBaordInPut {
    title: string;
    contents: string;
  }

  async function handleEdit() {
    const myVariables: IMyVariables = {
      updateBoardInput: {},
      password: myPassword,
      boardId: String(router.query.boardId),
    };
    //const myUpdateboardInput: IMyUpdateBoardInput = { images: fileUrls };
    if (myTitle !== "") myVariables.updateBoardInput.title = myTitle;
    if (myContents !== "") myVariables.updateBoardInput.contents = myContents;
    if (youtubeUrl !== "") myVariables.updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      myVariables.updateBoardInput.boardAddress = {};
      if (zipcode) myVariables.updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) myVariables.updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        myVariables.updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    console.log(youtubeUrl);
    const result2 = await updateBoard({
      variables: myVariables,
    });
    //if (myPassword !== "")myVariables.p
    console.log(result2);

    router.push(`/boards/${router.query.boardId}`);
    // const result = await updateBoard({
    //   variables: myVariables
    // })
  }

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }
  return (
    <BoardWriteUI
      myWriterError={myWriterError}
      myPasswordError={myPasswordError}
      myTitleError={myTitleError}
      myContentsError={myContentsError}
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyPassword={onChangeMyPassword}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      onChangeMyYoutubeUrl={onChangeMyYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      
      // onChangeFile={onChangeFile}
      onClickSubmit={onClickSubmit}
      handleEdit={handleEdit}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      isActive={isActive}
      isEdit={props.isEdit}
      isOpen={isOpen}
      data={props.data}
      fileRef={fileRef}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
    />
  );
}
