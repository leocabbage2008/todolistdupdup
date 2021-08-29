import React from "react";

export default function Todos({ todos, handleCheck, handleDelete }) {
  return (
    <div>
      {todos.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              checked={v.isComplete}
              onChange={() => handleCheck(i)}
            />
            {v.isComplete ? <strike>{v.title}</strike> : <span>{v.title}</span>}
            <button onClick={() => handleDelete(i)}>x</button>
          </div>
        );
      })}
    </div>
  );
}
