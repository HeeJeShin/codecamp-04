import { useEffect, useState } from "react";
import BasketUI from "./MarketBasket.prsenter";


export default function Basket(){
    const [basketItems, setBasketItems] = useState([]);

    const onClickDelete = (id: any) => () => {
        const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
        const newBaskets = baskets.filter((el) => el._id !== id);
        localStorage.setItem("basket", JSON.stringify(newBaskets));
        setBasketItems(newBaskets);
        alert("삭제합니다")
    }
    useEffect(() => {
        const baskets= JSON.parse(localStorage.getItem("basket") || "[]");
        setBasketItems(baskets)
    },[]);

    return <BasketUI basketItems={basketItems} onClickDelete={onClickDelete}/>
}