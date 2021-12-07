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

    function onClickLogin() {
        alert("로그인에 성공하였습니다.");
        const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
        if(baskets.length){
            const result = confirm("장바구니에 담으신 상품이 있습니다! 장바구니 페이지로 이동할까요?")
            if(result) router.push("/26-03-basket-logged-in")
        }
        
      }
      

    return<BasketUI onClickBasket={onClickBasket} data={data} onClickLogin={onClickLogin}/>
}``