import { Button, Input, messaage } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../features/todo/todoSlice";

const CreateTodo = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoValue.trim() === "" || todoTitle.trim() === "") {
      return console.log("Please enter a note");
    }
    dispatch(addNewTodo(todoValue.trim()));
    dispatch(addNewTodo(todoTitle.trim()));
  };

  return (
    <>
      <form className="grid gap-4 border-b pb-2">
        <Input
          onChange={(event) => setTodoTitle(event.target.value)}
          size="large"
          placeholder="Start typing Title..."
        />
        <Input
          onChange={(event) => setTodoValue(event.target.value)}
          size="large"
          placeholder="Start typing Content..."
        />
        <Button onClick={handleAddTodo} type="primary">
          Add Todos
        </Button>
      </form>
    </>
  );
};

export default CreateTodo;
