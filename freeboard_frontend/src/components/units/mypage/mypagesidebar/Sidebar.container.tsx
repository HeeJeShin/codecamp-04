import { useQuery } from "@apollo/client";
import { DomainAddRounded } from "@mui/icons-material";
import { MouseEvent } from "react";
import { useRouter } from "next/router";
import MypageSidebarUI from "./Sidebar.presenter";
import { FETCH_USER_LOGGED_IN } from "./Sidebar.queries";

const MyPageSidebarContainer = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickMove = (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  return <MypageSidebarUI data={data} onClickMove={onClickMove} />;
};
export default MyPageSidebarContainer;
