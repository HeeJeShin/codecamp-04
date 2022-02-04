import styled from "@emotion/styled";

interface IMyButtonProps {
  isValid: boolean;
  type: any;
}
const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : "#955ea3"};
  border-color: #955ea3;
`;

export default function Button01(props: any) {
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
  );
}
