import { useRouter } from "next/router";
import SiderbarPageUI from "./Sidebar.presenter"
interface SidebarPage {

onClickMyDogPage : () => void
onClickMyBoards : () => void
}
export default function SidebarPage(){
    const router = useRouter();

    function onClickMyBoards(){
        router.push("/boards");
    }
    
    function onClickMyDogPage(){
        router.push("/mydog/");
    }

    function onClickMyHOME(){
        router.push("/");
    }

    return(
        <SiderbarPageUI
            onClickMyHOME={onClickMyHOME}
            onClickMyBoards={onClickMyBoards}
            onClickMyDogPage={onClickMyDogPage}
            
        />    
    );
}


