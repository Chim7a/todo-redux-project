import "./App.css";
import DisplayTodos from "./components/DisplayTodos";
import CreateTodo from "./components/CreateTodo";

function App() {
  return (
    <>
      <section>
        <div>
          <h1>Todo List</h1>
          <CreateTodo />
          <DisplayTodos />
        </div>
      </section>
    </>
  );
}

export default App;
