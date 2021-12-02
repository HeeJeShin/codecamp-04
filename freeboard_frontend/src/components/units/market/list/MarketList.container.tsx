import { useRouter } from "next/router"
import MarketWriteUI from "../write/MarketWrite.presenter"


const MarketList = () => {
 const router = useRouter();

 function onClickWrite(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element) router.push(event.target.id);
  }

 return<
     MarketWriteUI
        onClickWrite={onClickWrite}
     />   
}

export default MarketList