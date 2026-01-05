import { useState } from "react";

function Todo() {
  const initialTodos = [
    { id: 1, task: "Learn React", completed: true },
    { id: 2, task: "Build a Todo App", completed: false },
    { id: 3, task: "Practice JavaScript", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [newTask, setNewTask] = useState("");

  // add todo
  const addTodo = () => {
    if (newTask.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), task: newTask, completed: false },
    ]);
    setNewTask("");
  };

  // delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // toggle complete
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const totalTodo = todos.length;
  const completedTodos = todos.filter((t) => t.completed).length;
  const pendingTodos = todos.filter((t) => !t.completed).length;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 Todo App</h1>

      {/* Add Todo */}
      <div style={styles.inputBox}>
        <input
          style={styles.input}
          placeholder="Enter new todo..."
          value={newTask}
          onChange={(e) => 
            (e.target.value)}
        />
        <button style={styles.addBtn} onClick={addTodo}>
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul style={styles.list}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              ...styles.listItem,
              backgroundColor: todo.completed ? "#e6ffe6" : "#ffe6e6",
            }}
          >
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                fontWeight: "500",
              }}
            >
              {todo.task}
            </span>

            <div>
              <button
                style={styles.toggleBtn}
                onClick={() => toggleCompleted(todo.id)}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>

              <button
                style={styles.deleteBtn}
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Stats */}
      <div style={styles.stats}>
        <p>Total: {totalTodo}</p>
        <p>Completed: {completedTodos}</p>
        <p>Pending: {pendingTodos}</p>
      </div>
    </div>
  );
}

export default Todo;

/* Styles */
const styles = {
  container: {
    maxWidth: "450px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  addBtn: {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#4caf50",
    color: "white",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "6px",
  },
  toggleBtn: {
    marginRight: "8px",
    padding: "6px 10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#2196f3",
    color: "white",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "6px 10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#f44336",
    color: "white",
    cursor: "pointer",
  },
  stats: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
};
