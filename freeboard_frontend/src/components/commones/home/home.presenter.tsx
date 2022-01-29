import BoardBest from "../../units/board/Bestboard/BoardBest.presenter";
import BestItem from "../../units/market/Bestitem/BestItem.container";
import * as S from "./home.styles";

const HomeUI = () => {
  return (
    <S.Wrapper>
      <S.BestBoardWrapper>
        <BoardBest />
      </S.BestBoardWrapper>

      <S.BestItemWrapper>
        <BestItem />
      </S.BestItemWrapper>
      <S.Myself>
        <S.HomeTitle> 안녕하세요! Hi HEEJE입니다 </S.HomeTitle>
        <S.Remarks>모두가 사랑하는 인테리어 소품 팝업매장</S.Remarks>
        <S.HomeContents>
          이사이트는 판매자가 직접 소비자에게 인테리어 소품을 파는 컨셉입니다.
          작은 인테리어 소품으로 내공간을 더빛나게 하고싶은 사람들을 위한
          사이트입니다.
        </S.HomeContents>
        <S.HomeContents>
          간편하게 상품을 올릴수있고 직거래도 가능하게 주소를 입력하면 지도로
          거래위치를 표시해 원할하게 직거래를 할 수 있습니다.
          서로거래할수있습니다.
        </S.HomeContents>
        <S.HomeContents>
          로그인을 하면 댓글을 통해 구매를 원하는 사람이 상품에 대해 문의하고
          대댓글을 통해 판매자가 답변할수있습니다.{" "}
        </S.HomeContents>
        <S.HomeContents>
          로그인을 하지 않아도 글을 쓸수있는 게시판을 따로 만들어 서로 정보를
          공유할 수 있는 게시판을 따로 만들어 두었습니다{" "}
        </S.HomeContents>
      </S.Myself>
      <S.MyStack>
        <S.StackText>제가 사용한 기술스텍입니다</S.StackText>
        <S.StackImgWrapper>
          <>
            {/* <S.StackImg src="../../../public/images/react.png" /> */}

            <S.StackImg
              src={`https://images.velog.io/images/heemaeng/post/7f7c7109-d41b-427a-8a68-24bd18e23703/javascript-2752148-2284965.png`}
            />

            <S.StackImg
              src={`https://w7.pngwing.com/pngs/390/229/png-transparent-logo-html5-brand-design-text-logo-number.png`}
            />

            <S.StackImg
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png`}
            />
            <S.StackImg
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png`}
            />
          </>
          <>
            <S.StackImg
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png`}
            />

            <S.StackImg
              src={`https://icedevera.com/images/skills/frontEnd/next.png`}
            />
            <S.StackImg
              src={`https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg`}
            />

            <S.StackImg
              src={`https://coollogo.net/wp-content/uploads/2021/02/Apollo-GraphQL-Compact-logo.svg`}
            />
          </>
          <>
            <S.StackImg
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png`}
            />
            <S.StackImg
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png`}
            />
            <S.StackImg
              src={`https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png`}
            />
          </>
        </S.StackImgWrapper>
      </S.MyStack>
    </S.Wrapper>
  );
};

export default HomeUI;
