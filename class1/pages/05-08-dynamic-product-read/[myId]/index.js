import { useRouter } from "next/router"
import { useQuery, gql } from '@apollo/client'

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            seller
            name
            detail
            price
            # 이게 그래프큐엘 주석임
        }
    }
`

export default function DynamicProductReadPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_PRODUCT, { variables: { productId: router.query.myId } })

    // console.log(data) // 자바스크립트 주석

    return (
        <>
            <div>나의 상품 아이디: {router.query.myId}</div>
            <div>판매자: {data ? data.fetchProduct.seller : "qqq"}</div>
            {/* <div>상품명: {data && data.fetchProduct.name}</div> 이건 HTML 주석 */}
            <div>상품상세: {data?.fetchProduct.detail}</div>
            <div>상품가격: {data?.fetchProduct.price}</div>
        </>
    )

}