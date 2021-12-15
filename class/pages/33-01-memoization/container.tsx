import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링됩니다!!!");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const randomValue = useMemo(() => {

    return  Math.random();
  }, [])
  console.log(randomValue)

  const onClickCountLet = useCallback(
    () => {
        console.log(countLet +1)
        countLet +=1  //countLet = countLet + 1;
    },[]) 

  const onClickCountState = useCallback(() =>  {
       // console.log(countState +1)
      setCountState(prev  => prev + 1);
    },[])

  return (
    <>
      <div>=====================</div>
      <div>이것은 컨테이너입니다</div>
      <div>카운트(let):{countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1올리기!!</button>

      <div>카운트(state):{countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기!!</button>
      <div>=====================</div>
      <MemoizationPresenterPage countState={countState}/>
    </>
  );
}
