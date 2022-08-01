import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./TodoBoard";

// 1. 인풋창이 있고 버튼이 있다.
// 2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가된다
// 3. 아이템 삭제버튼을 누르면 삭제가 가능하다

function App() {
  const [inputValue, setInputValue] = useState("");
  // useState는 배열을 반환함.
  // 초기값 ('') 빈칸 지정
  // inputValue : 초기값을 담고 있는 state 변수
  // setInputValue : state 값을 업데이트 해주는 함수
  // inputValue의 값을 input에 준다
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
    // 기존에 있는 투두리스트는 유지하되 새로운 inputValue넣는데
    // 투두리스트에 클릭할때마다 아이템이 추가된다
  };
  return (
    <main>
      <input
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      {/* input창에 값을 입력할때마다 호출되는 onChange 이벤트 */}
      {/* 모든 이벤트 핸들러는 이벤트 객체를 줌 
      이벤트 안에 인풋에 입력한 입력 값이 있음  */}
      {/* 입력값을 저장하기 위해 state를 쓴다  */}
      {/* setInputValue 로 inputValue state에 값을 넣어준다  */}
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} />
      {/* app이 가지고 있는 투두리스트를 어떻게 투두보더에 전달할까? - props로!     */}
    </main>
  );
}

export default App;
