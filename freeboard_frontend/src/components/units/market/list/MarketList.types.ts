import { IQuery } from "../../../../commons/types/generated/types";
import {  MouseEvent, MouseEventHandler } from "react";


  
export interface   IMarketListProps  {
  onClickMove?: (event: MouseEvent<HTMLDivElement>)
  onLoadMore: () => void; 
    
}

export interface ExpandMoreProps {
  //onClickMoveToMarkDetail: MouseEventHandler<HTMLDivElement> | undefined;
  data: any;
  onClickMove: any;
  loadMore: () => void;
  el: any;
  expand: boolean;
  title: string;
  subheader: Date;
  seller: any;
  name: string;
  Contents: string;
  createdAt: any;
  onClickMoveToMarketDetail: any;
}
