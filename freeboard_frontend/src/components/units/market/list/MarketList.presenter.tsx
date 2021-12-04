import { IconButtonProps } from "@material-ui/core"
import * as S from "./MarketList.styles"
import {IMarketListUIProps} from './MarketList.types'
import Card from "../../../../commons/card/Card01"
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
  title: string;
  subheader: Date;
  Myseller: any; 
  Myname: string;
  MyContents: string;
  onClickMove: any;
  


}


const MarketListUI = (props: ExpandMoreProps) => {

  return(
      <>
      {props.data?.fetchUseditem.map((el:any, index: number)=> (
         <Card 
              id="./MarketDetail"  
            onClick ={props.onClickMove}
             key={el._id}
        //  {index + 1}
         >  
            
            
          
          
           {el.name}
           {el.remarks}
           {el.contents}
           {el.price}
         </Card>
     

        
          
       ))} 
       
       <button id="/market/new" onClick={props.onClickMove}>상품등록</button>
      </>

  )   
 }
export default MarketListUI