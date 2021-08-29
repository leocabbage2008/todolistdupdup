import React from "react";

export default function Form({ onInput, handleSub }) {
  return (
    <div>
      <form action="#" onSubmit={(e) => handleSub(e)}>
        <input type="text" onChange={onInput} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
