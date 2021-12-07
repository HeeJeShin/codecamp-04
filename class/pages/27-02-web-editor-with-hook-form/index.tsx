import {useForm} from 'react-hook-form'

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { triggerFocus } from 'antd/lib/input/Input';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// 동적으로 브라우저에서만 임폴트하는것.

export default function WebEditorPage() {
  const{handelSubmit, register, setValue} = useForm({
    mode: "onChange"
  })
  
  function handleChange(value: string) {
    console.log(value);

    // 레지스터로 등록하지않고, 강제로 값을 넣어주는 기능!!!

    setValue("contents", value === "<p><br></p>" ? "" : valueC);

    // onChange 됐는지안됐는지 react-hook-form에 알려주는기능

    triggerFocus("contents")
  }

  // if(process.browser){
  //     console.log("나는 브라우저다.")
  // } else{
  //     console.log("나는 프론트엔드 서버다")
  // }

  return (
    <>
      작성자: <input type="text"{...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")}/>
      <br />
      제목: <input type="text"{...register("text")} />
      <br />
      내용:
      {process.browser && <ReactQuill onChange={handleChange} />}
      <br />
      <button>등록하기</button>
    </>
  );
}
