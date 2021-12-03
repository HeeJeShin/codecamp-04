import { useMoveToPage } from "../../src/components/hooks/useMovetopage";


export default function CustomHooksUseMoveToPage() {
  const { moveToPage } = useMoveToPage();

  return (
    <>
      <div>커스텀 훅 연습- 페이지이동</div>
      <button onClick={moveToPage("/board")}> 게시판으로 이동</button>
      <button onClick={moveToPage("/market")}> 마켓으로 이동</button>
      <button onClick={moveToPage("/mypage")}> 마이페이지으로 이동</button>
    </>
  );
}
