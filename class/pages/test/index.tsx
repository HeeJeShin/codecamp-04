import { gql, useMutation } from "@apollo/client"
import { getSentryRelease } from "@sentry/nextjs";
import { Modal } from "antd";
import { useState } from "react";
import { IMutation, IMutationCreateBoardArgs } from "../../src/commons/types/generated/types";

import * as Sentry from "@sentry/nextjs"

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
        }
    }
`;

const defaultInputs ={
  writer:"",
  password: "",
  title:"",
  contents: "",
}

export default function IsSubmittiongSentryPage(){
  const [isSubmitting, setIsSubmitting] = useState(false)
  const[createBoard] = useMutation<Pick<IMutation,"createBoard">,IMutationCreateBoardArgs>(CREATE_BOARD)
  const[inputs, setInputs] = useState(defaultInputs)

  const onClickSubmit = async() ={
    setIsSubmitting(true)
    try{
      const result =  createBoard({
        variables: { createBoardInput: {...inputs}},
      });
      console.log(result)
      setIsSubmitting(false)
    }catch(error){
      Modal.error({content: error.message })
      Sentry.captureException
    }
    
  }

  return(
    <>
        작성자: <input type="text" onChange={}/>
        비밀번호: <input type= "password" onChange={} />
        제목: <input type="text" onChange={} />
        내용: <input type="text" onChange={} />
        <button onClick={onClickSubmit}> GO </button>
    </>
  )
}