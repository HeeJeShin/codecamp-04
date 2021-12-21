import { withAuth } from "../../src/commons/hocs/withAuth"
import BestItem from "../../src/components/units/market/Bestitem/BestItem.container"
import MarketList from "../../src/components/units/market/list/MarketList.container"


const MarketPage = () =>{

    return(
        <>
            {/* <BestItem/> */}
             <MarketList/>
        </>
    )
}

export default MarketPage