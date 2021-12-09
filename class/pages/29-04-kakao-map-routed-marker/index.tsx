/* eslint-disable spaced-comment */
// import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=932db78e814fb177f5ae855f570cb798";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.48536, 126.894045), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        // // 마커가 표시될 위치입니다
        // const markerPosition = new window.kakao.maps.LatLng(37.48536, 126.894045);

        // // 마커를 생성합니다
        // const marker = new window.kakao.maps.Marker({
        //   position: markerPosition,
        // });

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(map, "click", function (mouseEvent) {
          // 클릭한 위도, 경도 정보를 가져옵니다
          const latlng = mouseEvent.latLng;

          // 마커 위치를 클릭한 위치로 옮깁니다
          marker.setPosition(latlng);

          // const message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
          // message += "경도는 " + latlng.getLng() + " 입니다";

          // const resultDiv = document.getElementById("clickLatlng");
          // resultDiv.innerHTML = message;
        });
      });
    };
  }, []);

  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=932db78e814fb177f5ae855f570cb798"
        ></script>
      </Head> */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
