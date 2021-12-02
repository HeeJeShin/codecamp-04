import {useForm, useFormState} from "react-hook-form";
import *as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import styled from "@emotion/styled"
import { MyButton } from "../../src/components/units/board/write4/BoardWrite.styles";

interface FormValues{
    myEmail: string;
    myPassword: string;
}

export default function ReactHookFormPage(){
    const{handleSubmit, register, formState } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    function onClickLogin(data: FormValues){
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onClickLogin)}>
            이메일:
            <input type="text" {...register}/>
            <div>{formState.errors.myEmail?.message}</div>
            비밀번호:
            <input type="password" {...register("myPassword")} />
            <div>{formState.errors.myPassword?.message}</div>
            <MyButton> isValid={formState.isValid}</MyButton>
        </form>
    )
}