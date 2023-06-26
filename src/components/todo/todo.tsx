import React from "react";

export function Todo() {

  return (
    <div className="todo">
      <input placeholder="todo" type="text" />
      <button>edit</button>
      <button>delete</button>
    </div>
  );
}