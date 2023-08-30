import { useState } from "react";

function Project() {
  const [memo, setMemo] = useState("");
  const [memoList, setMemoList] = useState([]);
  const [search, setSearch] = useState("");
  let temp = [];
  function memoCreate(e) {
    e.preventDefault();
    setMemo(e.target.value);
  }
  function onSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    temp = [...memoList];
    temp.push(memo);
    setMemoList([...temp]);
    setMemo("");
  }
  function deleteItem(num) {
    temp = [...memoList];
    temp.splice(num, 1);
    setMemoList([...temp]);
  }
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>검색</label>
          <input type="text" value={search} onChange={onSearch} />
          <button>제출</button>
        </div>
        <div>
          <label>메모</label>
          <input value={memo} onChange={memoCreate} type="text" />
          <button onClick={onSubmit}>제출</button>
        </div>
      </form>
      <ul>
        {memoList.map((item, idx) => {
          return (
            <>
              <li key={idx}>
                {item}
                <button
                  onClick={() => {
                    deleteItem(idx);
                  }}
                >
                  삭제
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Project;
