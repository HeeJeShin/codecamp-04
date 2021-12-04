import { IQuery } from "../../../../commons/types/generated/types";
import {  MouseEvent, MouseEventHandler } from "react";


  
export interface   IMarketListProps  {
  onClickMove?: (event: MouseEvent<HTMLDivElement>)
   
    
}

export interface IMarketListUIProps{
  onClick?: MouseEventHandler<HTMLButtonElement> 
  onClickMove?: (event: MouseEvent<HTMLDivElement>)
}