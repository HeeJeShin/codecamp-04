import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("필수 입력 항목입니다."),

  remarks: yup
    .string()
    .max(20, "최대 20자까지 입력할 수 있습니다.")
    .required("필수 입력 항목입니다."),

  contents: yup.string().required("필수 입력 항목입니다."),

  price: yup
    .number()
    .typeError("가격은 숫자로 입력해야 합니다.")
    .required("필수 입력 항목입니다."),

  // tag:

  // images: yup.array(),
});
