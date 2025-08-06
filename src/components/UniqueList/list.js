import React from "react";
import { v4 as uuidv4 } from 'uuid';

const todos = [
  { id: uuidv4(), title: "todos1", desc: "this is a description 1" },
  { id: uuidv4(), title: "todos2", desc: "this is a description 2" },
  { id: uuidv4(), title: "stalk support", desc: "this is a description 3" },
  { id: uuidv4(), title: "other support", desc: "this is a description 4" },
];

const List = () => {
  return (
    <div>
      {todos.map(({ id, title, desc }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
