import * as S from "./MypageSearch.styles";
import { IMypageSearchUIProps } from "./MypageSearch.types";

export default function MypageSearchUI(props: IMypageSearchUIProps) {
  return (
    <S.Searchbar>
      <S.FireFilledIcon />
      <S.SearchbarInput
        placeholder="검색어를 입력해주세요"
        onChange={props.onChangeSearchbar}
      />
    </S.Searchbar>
  );
}
