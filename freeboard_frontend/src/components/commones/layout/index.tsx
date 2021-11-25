import React, { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.container";
import SidebarPage from "./sidebar/Sidebar.container";
import Footer from "./footer/Footer.container";
import Navigation from "./navigation/Navigation.container";
import Banner from "./banner/Banner.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

const Body = styled.div``;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 200px;
`;


const HIDDEN_HEADERS = [
  "/12-05-modal-address-state-prev",
  //...
];

interface ILayoutProps {
  children: ReactChild;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router); //라우터에 뭐가있나?

  //router.asPath // 주소가 위의 히든에 있는지 체크하는기능.

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  console.log(SidebarPage)
  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      <Banner />
      {/* <Navigation /> */}
      <BodyWrapper>
        <SidebarPage/>
        <Body> {props.children} </Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
   
  );
}
