import * as S from "./Navigation.styles";

interface INavigationPageUIProps {
  onClickMenu: () => void;
}

export default function NavigationPageUI(props: INavigationPageUIProps) {
  return (
    <S.MyNavigation>
      <>|</>
      <S.MenuItem id="/" onClick={props.onClickMenu}>
        HOME
      </S.MenuItem>
      <>|</>
      <S.MenuItem id="/boards" onClick={props.onClickMenu}>
        BOARDS
      </S.MenuItem>
      <>|</>
      <S.MenuItem id="/market" onClick={props.onClickMenu}>
        MARKET
      </S.MenuItem>
      <>|</>
      <S.MenuItem id="/mydog" onClick={props.onClickMenu}>
        JOKEPAGE
      </S.MenuItem>
      <>|</>
    </S.MyNavigation>
  );
}
