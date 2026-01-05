import { useState } from "react";

function Task2() {
  // Step 1: Initial todo list
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: true },
    { id: 2, task: "Build a Todo App", completed: false },
    { id: 3, task: "Practice JavaScript", completed: false },
  ]);

  const [newTask, setNewTask] = useState(""); // input field state

  // Step 2: Add a new todo
  const addTodo = () => {
    if (newTask.trim() === "") return; // ignore empty input

    setTodos([
      ...todos,
      { id: todos.length + 1, task: newTask, completed: false },
    ]);
    setNewTask(""); // clear input field
  };

  // Step 3: Toggle completed status
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Step 4: Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Step 5: Counters
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Todo App</h1>

      {/* Input to add new todo */}
      <input
        type="text"
        placeholder="Enter new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ padding: "5px", width: "70%" }}
      />
      <button
        onClick={addTodo}
        style={{ padding: "5px 10px", marginLeft: "10px" }}
      >
        Add
      </button>

      {/* Todo List */}
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 0",
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "green" : "black",
            }}
          >
            <span>{todo.task}</span>
            <div>
              <button
                onClick={() => toggleCompleted(todo.id)}
                style={{ marginRight: "5px" }}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Counters */}
      <div style={{ marginTop: "20px" }}>
        <p>Total Todos: {totalTodos}</p>
        <p>Completed Todos: {completedTodos}</p>
        <p>Pending Todos: {pendingTodos}</p>
      </div>
    </div>
  );
}

export default Task2;
