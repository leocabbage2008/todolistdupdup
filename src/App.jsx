import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Form from "./components/Form";
import Todos from "./components/Todos";
import initTodos from "./constants";

function App() {
  const [todos, setTodos] = React.useState(initTodos);
  const [input, setInput] = React.useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleCheck = (i) => {
    const nextTodos = [...todos];
    nextTodos[i].isComplete = !nextTodos[i].isComplete;
    setTodos(nextTodos);
  };
  const handleDelete = (i) => {
    const nextTodos = [...todos];
    nextTodos.splice(i, 1);
    setTodos(nextTodos);
  };
  const handleSub = (e) => {
    if (input.replaceAll(" ", "")) {
      const nextTodos = [...todos];
      nextTodos.push({ title: input, isComplete: false });
      setTodos(nextTodos);
      e.target.reset();
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Todos
          todos={todos}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Form onInput={handleInput} handleSub={handleSub} />
      </header>
    </div>
  );
}

export default App;
