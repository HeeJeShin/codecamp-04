import * as S from "./MarketBasket.styles";

export default function BasketUI(props: any) {
  return (
    <S.Wrapper>
      <S.Title>장바구니</S.Title>
      {props.basketItems.map((el, index) => (
        <S.Wrapper_Inner>
          <S.Index>{index + 1}</S.Index>
          <S.Image src={`https://storage.googleapis.com/${el.images[0]}`} />
          <S.Name>{el.name}</S.Name>
          <S.Price>{el.price}</S.Price>
          <S.SubmitButton onClick={props.onClickDelete(el._id)}>
            DELETE
          </S.SubmitButton>
        </S.Wrapper_Inner>
      ))}
    </S.Wrapper>
  );
}
