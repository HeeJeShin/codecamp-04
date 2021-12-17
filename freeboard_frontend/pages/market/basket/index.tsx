import { withAuth } from "../../../src/commons/hocs/withAuth";
import Basket from "../../../src/components/units/market/basket/MarketBasket.container";



function BasketPage(){

    return<Basket />
}
export default withAuth(BasketPage)