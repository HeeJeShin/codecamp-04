import {useState } from "react";
import {Modal, Button} from "antd";


export default function ModalBasicPage(){

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return(
        <>
        <Button type="primary" onClick={showModal}>
          신희제!!!!
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          비밀번호 입력: <input type = "password" />
        </Modal>
      </>
    )
}