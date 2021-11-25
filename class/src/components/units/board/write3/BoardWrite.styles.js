import styled from "@emotion/styled"
export const MyInput =styled.input`
`
export const MyButton =styled.button`
    background-color:grey;
    background-color: ${props=> props.qqq ===true
                    && "yellow" };
    font-size: 30px;
`