import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      {props.item}
      {/* item의 내용을 보여준다 */}
    </div>
  );
}

export default TodoItem;
