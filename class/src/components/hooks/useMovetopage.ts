import { useRouter } from "next/router";
import { useState } from "react";

type IPage = "/boards" | "/markets" | "/mypage"


export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVsitedPage] = useState("/");

  const moveToPage = (page: IPage) => () => {
    setVsitedPage(page);
    router.push(page);
  };

  return {
    moveToPage,
    visitedPage,
  };
}
