import * as S from "./BoardDetail.styles";
import { Tooltip } from "antd";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.CreatedAt>{props.data?.fetchBoard.createdAt}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconWrapper>
            <S.LinkIcon src="/images/link.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <S.LocationIcon src="/images/location.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>

          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
          {props.data?.fetchBoard.youtubeUrl && (
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl}
              width="486px"
              height="240px"
            />              
          )}
          <S.ImageWrapper>
            {props.data?.fetchBoard.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Img
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImageWrapper>
          <S.Contents_Icon>
             <S.Wapper_Like>
              <S.Like_Icon id="Like_Icon" onClick={props.onClickLike} />
                <div>{props.data?.fetchBoard.likeCount}</div>
              </S.Wapper_Like>        
              
              <S.Wapper_Dislike>
                <S.Dislike_Icon id="Dislike_Icon" onClick={props.onClickDislike} />
                  <div>{props.data?.fetchBoard.dislikeCount}</div>
              </S.Wapper_Dislike>
            
          </S.Contents_Icon>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>        
        <S.Button onClick={props.onClickMoveToList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToUpdate}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}

