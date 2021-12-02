import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지않습니다.")
    .required("반드시 입력해야하는 필수 사항입니다."),

  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번혼느 최대 15자리입니다.")
    .required("반드시 입력하세요!"),
});

interface FormValues {
  myEmail: string;
  myPassword: string;
}

export default function ReactHookFormPage() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data: FormValues) {
    console.log(data);
    // loginUser API 요청하기!!!
  }
  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      이메일:
      <input type="text" {...register("myEmail")} />
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호: <input type="password" {...register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>
      <button>로그인하기</button>
    </form>
  );
}
