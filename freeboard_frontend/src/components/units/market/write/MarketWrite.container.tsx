import { useMutation, useQuery } from "@apollo/client";
import router, { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import MarketWriteUI from "./MarketWrite.presenter";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
} from "./MarketWrite.queries";

const MarketWrite = (props: any) => {
  const router = useRouter();

  const [myName, setMyName] = useState("");
  const [myRemarks, setMyRemarks] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myPrice, setMyPrice] = useState("");
  const [useditemAddress, setuseditemAddress] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([""]);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  //다음 주소 모달코드
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [address, setAddress] = useState("");

  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  // const [createPointTransactionOfBuyingAndSelling] = useMutation(
  //   CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  // );

  const { data: dataFetchItem } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  console.log(dataFetchItem);

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

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  async function onClickSubmit() {
    alert("등록하였습니다");
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: myName,
          remarks: myRemarks,
          contents: myContents,
          price: Number(myPrice),
          images: fileUrls,
          useditemAddress: {
            zipcode: zipcode,
            address: address,
            addressDetail: addressDetail,
          },
        },
      },
    });
    router.push(`/market/${result.data?.createUseditem._id}`);
  }

  const onClickUpdate = async () => {
    const result = await updateUseditem({
      variables: {
        useditemId: router.query.useditemId,
        updateUseditemInput: {
          name: myName,
          remarks: myRemarks,
          contents: myContents,
          price: Number(myPrice),
          images: fileUrls,
          useditemAddress: {
            zipcode,
            address,
            addressDetail,
          },
        },
      },
    });
    router.push(`/market/${router.query.useditemId}`);
    console.log(result);
  };

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    setAddressDetail(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
    setIsModalVisible(false);
  }

  return (
    <MarketWriteUI
      onChangeMyName={onChangeMyName}
      onChangeMyRemarks={onChangeMyRemarks}
      onChangeMyContents={onChangeMyContents}
      onChangeMyPrice={onChangeMyPrice}
      onChangeFileUrls={onChangeFileUrls}
      onChangeAddressDetail={onChangeAddressDetail}
      fileUrls={fileUrls}
      onClickSubmit={onClickSubmit}
      data={props.data}
      dataFetchItem={dataFetchItem}
      isEdit={props.isEdit}
      isOpen={isOpen}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickUpdate={onClickUpdate}
      setIsModalVisible={setIsModalVisible}
      zipcode={zipcode}
      address={address}
      isModalVisible={isModalVisible}
      useditemAddress={useditemAddress}
    />
  );
};
export default MarketWrite;
