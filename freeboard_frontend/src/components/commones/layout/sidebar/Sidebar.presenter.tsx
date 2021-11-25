import *as S from "./Sidebar.styles"

interface SidebarPageUIProps{
    onClickMyDogPage: any;
    onClickMyBoards: any;
}


export default function SidebarPageUI(props: SidebarPageUIProps){

    return(
        <S.SidebarWrapper>
            <S.Header>
                <h1>HOME</h1>
            </S.Header>
            <S.mydiv onClick={props.onClickMyBoards}>
                 BOARDS
            </S.mydiv>
                
            <S.mydiv>
               market
            </S.mydiv>
                
            <S.mydiv onClick={props.onClickMyDogPage}>
                 JOKEPAGE
            </S.mydiv>

            <S.mydiv>
                 EDUCATION
            </S.mydiv>

            <S.mydiv>
                ABOUT
            </S.mydiv>
           
        </S.SidebarWrapper>
    );
}