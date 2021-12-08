
import { ChangeEvent } from "react";

export interface IMarketWriteProps {
    isEdit: boolean;
 
    
}

export interface IMarketWriteUIProps {
    data: any;
    isEdit: boolean;
    itemUpload: () => void;
    onChangeMyName: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeMyRemarks: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeMyContents: (event: ChangeEvent<HTMLInputElement>) => void;
   
    onChangeMyPrice: (event: ChangeEvent<HTMLInputElement>) => void;
    itemUpdate: () => void;
    //uploadImage: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeUploadImage: any;
    onChangeFileUrls: any;
    fileUrls: any;

    onClickSubmit: any;
    isOpen: any;
    onClickUpdate: any;
    handleChange: any;

}