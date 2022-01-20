import { useRouter } from "next/router";
import { MouseEvent } from "react";
import NavigationPageUI from "./Navigation.presenter";
interface NavigationPage {
  onClickMenu: () => void;
}

export default function NavigationPage() {
  const router = useRouter();

  function onClickMenu(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element) router.push(event.target.id);
  }

  return <NavigationPageUI onClickMenu={onClickMenu} />;
}
