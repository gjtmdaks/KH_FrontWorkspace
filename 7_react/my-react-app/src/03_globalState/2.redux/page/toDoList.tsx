import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { addTodo, deleteTodo, toggleTodo } from "../fuctures/todoSlice";
import styles from "../type/TodoList.module.css";

function TodoList() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoList.todos);

  const handleAdd = () => {
    const value = inputRef.current?.value?.trim();

    if (!value) {
      alert("값을 입력해주세요");
      return;
    }

    dispatch(addTodo(value));
    if(inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Todo List</h2>

      <input ref={inputRef} type="text" className={styles.input}
        placeholder="할 일을 입력하세요…" />
      <button className={styles.addBtn} onClick={handleAdd}>Add</button>

      <ul className={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <span
              className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
              onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>

            <button
              className={styles.deleteBtn}
              onClick={() => dispatch(deleteTodo(todo.id))}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;