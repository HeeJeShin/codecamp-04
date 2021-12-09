import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
    kakao: any;
}

export default function KakaoMapPage() {
 

  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.485360, 126.894045), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
  
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

  }, [])

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=932db78e814fb177f5ae855f570cb798"
        ></script>
      </Head>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
