import { IQuery } from "../../../../commons/types/generated/types";
import {  MouseEvent, MouseEventHandler } from "react";


  
export interface   IMarketListProps  {
  onClickMove?: (event: MouseEvent<HTMLDivElement>)
  onLoadMore: () => void; 
    
}

export interface IMarketListUIProps{
  onClick?: MouseEventHandler<HTMLButtonElement> 
  onClickMove?: (event: MouseEvent<HTMLDivElement>)
  onClickMoveToMarketDetail: (event: MouseEvent<HTMLDivElement>)

  
  
}

