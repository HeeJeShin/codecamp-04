import { useState } from "react";

const HashtagPage = () => {
  const [hashArr, setHashArr] = useState<string[]>([]);

  const onKeyUp = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, `#${event.target.value}`]);
      event.target.value = "";
    }
  };

  const deleteHash = (idx) => () => {
    hashArr.splice(idx, 1);
    setHashArr([...hashArr]);
  };
  return (
    <>
      <div style={{ backgroundColor: "blue", display: "flex" }}>
        <div style={{ backgroundColor: "red", color: "white" }}>
          {hashArr.map((el, idx) => (
            <span key={idx} onClick={deleteHash(idx)}>
              {el}
            </span>
          ))}
        </div>
        <input type="text" onKeyUp={onKeyUp} />
      </div>
    </>
  );
};

export default HashtagPage;