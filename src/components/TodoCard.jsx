import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, handleEditTodo, index } = props;
  return (
    <li className="todoItem">
      {children}
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => {
          handleEditTodo(index);
        }}
      ></i>

      <i
        className="fa-solid fa-trash"
        onClick={() => {
          handleDeleteTodo(index);
        }}
      ></i>
    </li>
  );
}
