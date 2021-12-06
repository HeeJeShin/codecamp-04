import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { IBoard } from "../../../../commons/types/generated/types"
import BasketUI from "./MarketBasket.prsenter"
import { FETCH_USED_ITEMS } from "./MarketBasket.queries"
export default function Basket(){
    const router = useRouter()
    const {data} = useQuery(FETCH_USED_ITEMS)

    const onClickBasket =(el) => {
        console.log(el);

        const baskets = JSON.parse(localStorage.getItem("basket") || "[]")

        let isExists = false;

        baskets.forEach((basketEl: IBoard) => {
            if(el._id === basketEl._id) isExists = true;
        })
        // if(isExists){
        //     alert("이미 장바구니에 담으셨습니다!!");
        //     return;
        // }
        const { __typename, ...newEl } = el;

        baskets.push(newEl);

        localStorage.setItem("basket", JSON.stringify(baskets))

    }

    const 

    return<BasketUI onClickBasket={onClickBasket} data={data}/>
}