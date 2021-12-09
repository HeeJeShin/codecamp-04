import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { UPDATE_USEDITEM } from "../list/MarketList.queries";
import MarketWriteUI from "./MarketWrite.presenter";
import { CREATE_USED_ITEM } from "./MarketWrite.queries";

const MarketWrite = (props: any) => {
  const router = useRouter();

  const [myName, setMyName] = useState("");
  const [myRemarks, setMyRemarks] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myPrice, setMyPrice] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([""]);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.marketId },
  });

  function onChangeMyName(event: ChangeEvent<HTMLInputElement>) {
    setMyName(event.target.value);

    if (
      event?.target.value !== "" &&
      myName !== "" &&
      myRemarks !== "" &&
      myContents !== "" &&
      myPrice !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyRemarks(event: ChangeEvent<HTMLInputElement>) {
    setMyRemarks(event.target.value);

    if (
      event.target.value !== "" &&
      myName !== "" &&
      myRemarks !== "" &&
      myContents !== "" &&
      myPrice !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
    setMyContents(event.target.value);

    if (
      event.target.value !== "" &&
      myName !== "" &&
      myRemarks !== "" &&
      myContents !== "" &&
      myPrice !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyPrice(event: ChangeEvent<HTMLInputElement>) {
    setMyPrice(event.target.value);

    if (
      event.target.value !== "" &&
      myName !== "" &&
      myRemarks !== "" &&
      myContents !== "" &&
      myPrice !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  async function onClickSubmit() {
    alert("test");
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: myName,
          remarks: myRemarks,
          contents: myContents,
          price: Number(myPrice),
          images: fileUrls,
        },
      },
    });
    router.push(`/market/${result.data?.createUseditem._id}`);
    console.log(result.data?.name);
  }

  async function onClickUpdate() {
    const myUpdateUseditemInput = {
      name: myName,
      remarks: myRemarks,
      contents: myContents,
      price: Number(myPrice),
      images: fileUrls,
    };

    try {
      await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,

          updateUseditemInput: myUpdateUseditemInput,
        },
      });
      router.push(`/market/${router.query.useditemId}`);
    } catch (error) {
      alert("error!!!!!");
    }
  }

  async function onClickMoveBuy() {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.useditemId,
        },
      });
    } catch (error) {
      alert("구매가 완료되었습니다.");
      console.log(result)
    } catch(error){
      alert(error.message)
    }
  }
  console.log(data)

  return (
    <MarketWriteUI
      onChangeMyName={onChangeMyName}
      onChangeMyRemarks={onChangeMyRemarks}
      onChangeMyContents={onChangeMyContents}
      onChangeMyPrice={onChangeMyPrice}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onClickSubmit={onClickSubmit}
      data={props.data}
      isEdit={props.isEdit}
      isOpen={isOpen}
      onClickUpdate={onClickUpdate}
      onClickMoveBuy={onClickMoveBuy}
    />
  );
};
export default MarketWrite;
