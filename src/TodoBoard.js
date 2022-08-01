import React from "react";
import TodoItem from "./TodoItem";
// 같은 폴더 상에 있기때문에 ./component 써줄필요 없음

function TodoBoard(props) {
  // props  안에는 todoList가 있다

  // console.log("todoBoard",props.todoList)
  // TodoBoard에서 프린트한 todoList

  return (
    <div>
      <h1>Todo List</h1>
      {props.todoList.map((item) => (
        <TodoItem item={item} />
      ))}
      {/* todoList에 있는 아이템을 map 어레이 함수 배열에 있는 내용을 보여주고 싶을때 사용 */}

      <TodoItem />
    </div>
  );
}

export default TodoBoard;
