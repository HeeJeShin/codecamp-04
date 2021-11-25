import router from "next/router";
import SiderbarPageUI from "./Sidebar.presenter"
interface SidebarPage {

onClickMyDogPage : () => void
onClickMyBoards : () => void
}
export default function SidebarPage(){
    
    function onClickMyBoards(){
        router.push("/boards");
    }
    
    function onClickMyDogPage(){
        router.push("/mydog/");
    }

    return(
        <SiderbarPageUI
            onClickMyBoards={onClickMyBoards}
            onClickMyDogPage={onClickMyDogPage}
        />    
    );
}


