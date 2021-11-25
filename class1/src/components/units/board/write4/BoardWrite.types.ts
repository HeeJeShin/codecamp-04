import { ChangeEvent } from "react"; //이것은 다른곳에 있는게 아니다 내장되어있는것이기 때문에 얘만 인폴트를 따로 더해줘야한다. 

export interface IBoardWriteProps {
  isEdit: boolean;
  data: any
  date?: any;
}

export interface IEmotionProps {
  qqq: boolean;
}

export interface IBoardWriteUIProps {
  aaa: (event: ChangeEvent<HTMLInputElement>) => void; //리턴이 없는 함수 void
  bbb: (event: ChangeEvent<HTMLInputElement>) => void;
  ccc: (event: ChangeEvent<HTMLInputElement>) => void;
  zzz: () => void;
  qqq: boolean;
  ggg: boolean;
  xxx: () => void;
  data: any;
}
