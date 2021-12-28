import styled from '@emotion/styled';
import Header from './header/Header.container';
import SidebarPage from './sidebar/Sidebar.container';
import Footer from './footer/Footer.container';
import Navigation from './navigation/Navigation.container';
import Banner from './banner/Banner.container';

export default function Layout(props: any) {
  return (
    <>
      <Header />
      <Banner />
      <Navigation />
      <div> {props.children} </div>
      <Footer />
    </>
  );
}
