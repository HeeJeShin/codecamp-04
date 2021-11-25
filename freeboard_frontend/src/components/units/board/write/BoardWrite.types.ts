import { ChangeEvent, ChangeEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IboardWriteProps {
    data: any;
    isEdit?: boolean
}

export interface IMyVariables {
    updateBoardInput: any;
    title?: string;
    contents?: string;
    password: string;
    boardId: string;
    boardAddress?: {
        zipcode?: string;
        address?: string;
        addressDetail?: string;
    };
}
export interface IEmotionProps{
    isActive?: boolean
}

export interface IBoardWriteUIProps{
    
   
    myWriterError?: string
    myPasswordError?: string
    myTitleError?: string
    myContentsError?: string
    onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeMyPassword:  (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeMyTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeMyContents:  any;
    onChangeMyYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickAddressSearch: () => void;
    onCompleteAddressSearch: (data: any) => void;
    onClickSubmit:  () => void;
    handleEdit:  () => void;
    isActive: boolean;
    isEdit? : boolean;    
    data?: Pick<IQuery, "fetchBoard">;
    address: string;
    zipcode: string;
    isOpen: boolean;
    addressDetail: string;
}

export interface IBoardsEditPageProps{
    data: any

    isEdit: boolean

}