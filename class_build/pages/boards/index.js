import Head from "next/head";

export default function BoardsPage() {
    
  return (
    <>
      <Head>
        <meta property="og:title" content="나만의 사이트 게시판!!!" />
        <meta property="og:url" content="http://heeje.site" />
        <meta
          property="og:image"
          content="http://kvicnewsletter.co.kr/page/newsletter/vol29/img/sub02_01.jpg"
        />
        <meta
          property="og:description"
          content="안녕하세요 환영합니다! 나의 사이트입니다."
        />
      </Head>
      <div>안녕하세요 게시판입니다</div>
    </>
  );
}
