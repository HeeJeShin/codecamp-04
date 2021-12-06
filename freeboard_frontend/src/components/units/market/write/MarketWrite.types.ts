import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketWriteProps {
    onChangeMyInputs: any;
    onChangeMyInputsPrice: any;
    onClickItemUpload: any;
    onClickItemUpdate: any;
}

export interface IMarketWriteUIProps {
    isEdit: boolean;
    myInputs: any;
    data? : any
    
    myInputsPrice: any;
    itemUpdate: any;
    itemUpload: any;

}