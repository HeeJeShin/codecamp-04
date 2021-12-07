
import { ChangeEvent } from "react";

export interface IMarketWriteProps {
    isEdit: boolean;
 
    
}

export interface IMarketWriteUIProps {
    data: any;
    isEdit: boolean;
    itemUpload: () => void;
    myInputs: (event: ChangeEvent<HTMLInputElement>) => void;
    myInputsPrice: (event: ChangeEvent<HTMLInputElement>) => void;
    itemUpdate: () => void;
    //uploadImage: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeUploadImage: any;
}