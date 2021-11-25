import { Fragment } from "react";
import {Modal} from "antd";

export default function ModalAletPage(){

    function onClickSuccess(){
        Modal.success({ content:"게시물 등록에 성공 했습니다." })
    }

    function onClickFail(){
        Modal.error({ content: "게시물 등록에 실패 했습니다." })
    }

    return(
        <Fragment>
        <button onClick={onClickSuccess} > 알림창 나타나기(성공했을때 메시지)</button>
        <button onClick={onClickFail} > 알림창 나타나기(실패했을떄 메시지)</button>
        </Fragment>
    );

}