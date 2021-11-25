import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import {useState } from "react";
import {Modal, Button} from "antd";


export default function ModalBasicPage(){

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [myAddress, setMyAddress] = useState("")
   // cosnt [myAddressDetail, setMyAddressDetail] 
    const [myZonecode, setMyZonecode] = useState("")

    // const showModal = () => {
    //   setIsModalVisible(prev => !prev);   //false인애를 트루로 바꿔줌. 트루일때는?
    // };
  
    // const handleOk = () => {
    //   setIsModalVisible(prev => !prev);
    // };
  
    // const handleCancel = () => {
    //   setIsModalVisible(prev => !prev);
    // };
 //위에 복잡한과정을 하나로 묶어줌.  리팩토링 한다. 
 
    const onToggleModal = () => {
      setIsModalVisible((prev) => !prev); 
    };

    const handleComplete = (data: any) => {
        
        setMyAddress(data.address);
        setMyZonecode(data.zonecode);
        setIsModalVisible(prev => !prev);
      };

    return(
        <>
        <Button  onClick={onToggleModal}>우편번호검색</Button>
        <div>내주소 : {myAddress}  </div>
        <div>내우편번호 : {myZonecode}</div>
          
        
        {isModalVisible &&( 
         <Modal title="Basic Modal"   
            visible={true}  //항상 보여지게끔.  
            onOk={onToggleModal}
            onCancel={onToggleModal}>
                 <DaumPostcode onComplete={handleComplete} />  
                 {/* 조건부 랜더링 하는법 - isModalVisible 이걸로 감싸지면서 다시화면이 리셋이됨. 그니까 입력한 상태가아니라 처음부터로 돌아가게해줌.  */}
         </Modal> 
        )}
        
        
      </>
    )
}