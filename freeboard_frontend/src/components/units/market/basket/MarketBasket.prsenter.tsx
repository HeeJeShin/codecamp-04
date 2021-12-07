import *as S from "./MarketBasket.styles"

export default function BasketUI(props: any){

    return(
        <>
        {props.data?.fetchUseditems.map((el, index) => (
            <div key={el._id}>
            <span>{index + 1}</span>
            <span>{el.name}</span>
            <span>{el.price}</span>
            <span>{el.contents}</span>
            /
            <button onClick={props.onClickBasket(el)}>장바구니 담기</button>
            </div>
        ))}
        <button onClick={props.onClickLogin}>로그인하기</button>
        </> 
    )
}