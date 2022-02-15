import React, { ReactChild } from "react";
import styled from "@emotion/styled";

import SidebarPage from "./sidebar/Sidebar.container";
import Footer from "./footer/Footer.container";
import Navigation from "./navigation/Navigation.container";
import Banner from "./banner/Banner.container";
import { useRouter } from "next/router";
import Header from "./header/Header.container";

const Wrapper = styled.div`
  /* background-color: #edeae3; */
  width: 100%;
`;

const Body = styled.div``;

const BodyWrapper = styled.div`
  margin-top: 100px;
`;

const HIDDEN_HEADERS = [
  "/mypage",
  //...
];

const HIDDEN_BANNER = [
  "/mypage",
  // "/mypage/mystore",
  // "/mypage/myprofile",
  // "/mypage/mypayment",
  // "/mypage/mypagesidebar",
];

interface ILayoutProps {
  children: ReactChild;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  //router.asPath // 주소가 위의 히든에 있는지 체크하는기능.

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  return (
    <>
      <Wrapper>
        {!isHiddenHeader && <Header />}
        {!isHiddenBanner && <Banner />}
        {/* <Navigation /> */}
        <BodyWrapper>
          {/* <SidebarPage/> */}
          <Body> {props.children} </Body>
        </BodyWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
