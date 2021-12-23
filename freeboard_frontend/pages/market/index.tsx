import { withAuth } from "../../src/commons/hocs/withAuth"
import BestItem from "../../src/components/units/market/Bestitem/BestItem.container"
import MarketList from "../../src/components/units/market/list/MarketList.container"
import MarketCommentWrite from "../../src/components/units/marketcomment/questions/write/QuestionsWrite.Container"

const MarketPage = () =>{

    return(
        <>
            <BestItem/>
             <MarketList/>
             <MarketCommentWrite />
        </>
    )
}

export default MarketPage