import { Input, Button } from "antd";
import { MdDeleteForever } from "react-icons/md";
import React from "react";
import { useSelector } from "react-redux";

const DisplayTodos = () => {
  const { userTodos } = useSelector((state) => state.todo);

  return (
    <div>
      {userTodos.map((item, index) => {
        return (
          <div key={index}>
            <div className="contai">
              <h2>Title: {item.todo_title}</h2>
              <p>Todo Content: {item.todo_content}</p>
            </div>

            <div>
              <Button
                // onClick={() => dispatch(deleteTodoNote(item.note_id))}
                icon={<MdDeleteForever />}
                danger
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTodos;
