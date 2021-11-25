import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import {useState } from "react";
import {Modal, Button} from "antd";


export default function ModalBasicPage(){

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [myAddress, setMyAddress] = useState("")
   // cosnt [myAddressDetail, setMyAddressDetail] 
    const [myZonecode, setMyZonecode] = useState("")

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    const handleComplete = (data: any) => {
        
        setMyAddress(data.address);
        setMyZonecode(data.zonecode);
        setIsModalVisible(false);
      };

    return(
        <>
        <Button type="primary" onClick={showModal}>우편번호검색</Button>
        <div>내주소 : {myAddress}  </div>
        <div>내우편번호 : {myZonecode}</div>
          
        
        {isModalVisible &&( 
         <Modal title="Basic Modal"   
            visible={true}  //항상 보여지게끔.  
            onOk={handleOk}
            onCancel={handleCancel}>
                 <DaumPostcode onComplete={handleComplete} />  
                 {/* 조건부 랜더링 하는법 - isModalVisible 이걸로 감싸지면서 다시화면이 리셋이됨. 그니까 입력한 상태가아니라 처음부터로 돌아가게해줌.  */}
         </Modal> 
        )}
        
        
      </>
    )
}