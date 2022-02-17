import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailUI from "./MarketDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./MarketDetail.queries";
import { useEffect } from "react";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
} from "../../../../commons/types/generated/types";

declare const window: typeof globalThis & {
  kakao: any;
};

const MarketDetail = () => {
  const router = useRouter();

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  async function onClickDelete() {
    confirm("게시글을 정말로 삭제하겠습니까?");
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
      });
      alert("삭제완료");
      router.push("/market");
    } catch (error: unknown) {
      if (error instanceof Error) alert(error.message);
    }
  }

  const onClickUpdate = () =>
    router.push(`/market/${router.query.useditemId}/edit`);

  const onClickList = () => router.push(`/market`);

  async function onClickWishList() {
    try {
      const result = await toggleUseditemPick({
        variables: { useditemId: String(router.query.useditemId) },
      });
      alert("찜♡");
      console.log(result);
    } catch (error: unknown) {
      if (error instanceof Error) alert(error.message);
    }
  }

  async function onClickMoveBuy() {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.useditemId,
        },
      });
      alert("구매가 완료되었습니다");
      console.log(result);
    } catch (error: unknown) {
      if (error instanceof Error) alert(error.message);
    }
  }
  //주소옮기기
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      // "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=c1573b07307af25f6bb7415ff47e92fc";
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=932db78e814fb177f5ae855f570cb798";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        if (!data?.fetchUseditem?.useditemAddress?.address) return;
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);
        34321;
        console.log("marketDeatail-map");

        // // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          `${data?.fetchUseditem?.useditemAddress?.address}`,
          function (result: { x: any; y: any }[], status: any) {
            console.log("aa", result);
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              // const infowindow = new window.kakao.maps.InfoWindow({
              //   content:
              //     '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
              // });
              // infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [data?.fetchUseditem?.useditemAddress?.address]);
  console.log(data, "주소정보를 위한데이터");

  return (
    <>
      <MarketDetailUI
        update={onClickUpdate}
        list={onClickList}
        onClickMoveBuy={onClickMoveBuy}
        data={data}
        onClickDelete={onClickDelete}
        onClickWishList={onClickWishList}
      />
    </>
  );
};

export default MarketDetail;
