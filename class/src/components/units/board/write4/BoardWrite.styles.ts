import styled from "@emotion/styled"
import { IEmotionProps } from "./BoardWrite.types"
export const MyInput =styled.input`
`



export const MyButton =styled.button`
    background-color:grey;
    background-color: ${(props: IEmotionProps)=> props.qqq ===true
                    && "yellow" };
    font-size: 30px;
`