Perfect! Let’s dive into **Lists & Conditional Rendering in React** with clear examples. These are **fundamental concepts** for building dynamic UIs.

---

# 🔹 1️⃣ Lists in React

### ✅ What is a list?

A list is just an **array of items** you want to display in your UI. In React, we use the `.map()` method to render each item.

---

### Example: Render a List of Names

```jsx
import React from "react";

function NameList() {
  const names = ["Yash", "Mitansu", "Dhruv", "Vandan"];

  return (
    <div>
      <h1>Names List</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li> // key is required
        ))}
      </ul>
    </div>
  );
}

export default NameList;
```

**✅ Key Points:**

* Use `{}` inside JSX to write JavaScript
* Always provide a **unique `key`** for each item
* Can render any type of array: numbers, strings, objects

---

### Example: List of Objects

```jsx
const students = [
  { id: 1, name: "Yash", age: 22 },
  { id: 2, name: "Mitansu", age: 23 },
];

return (
  <div>
    {students.map((student) => (
      <p key={student.id}>
        {student.name} - {student.age} years old
      </p>
    ))}
  </div>
);
```

---

# 🔹 2️⃣ Conditional Rendering

### ✅ What is it?

Conditional rendering lets you **render different content based on a condition**.

---

### Example 1: Show / Hide Text

```jsx
import { useState } from "react";

function ConditionalExample() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>
        {showText ? "Hide" : "Show"} Text
      </button>

      {showText && <p>This text is visible!</p>}
      {!showText && <p>Text is hidden!</p>}
    </div>
  );
}

export default ConditionalExample;
```

**✅ Key Points:**

* Use `&&` for **if condition is true**
* Use `? :` (ternary) for **if-else**

---

### Example 2: Using Ternary Operator

```jsx
const isLoggedIn = true;

return (
  <div>
    <h1>{isLoggedIn ? "Welcome User" : "Please Log In"}</h1>
  </div>
);
```

---

### Example 3: Combining Lists + Conditional

```jsx
const students = [
  { id: 1, name: "Yash", passed: true },
  { id: 2, name: "Mitansu", passed: false },
];

return (
  <div>
    {students.map((s) => (
      <p key={s.id}>
        {s.name} - {s.passed ? "Passed ✅" : "Failed ❌"}
      </p>
    ))}
  </div>
);
```

---

# 🔹 Best Practices

1. Always give a **unique key** when rendering lists
2. Keep conditional expressions **simple**
3. For complex conditions, consider **helper functions**
4. Avoid inline logic for large JSX blocks → improves readability

---

If you want, I can **make a mini React project combining Lists + Conditional Rendering + State**, like a **Student Result Checker** where you can **toggle passing students, count them, and show details**.

Do you want me to make that?


### Condition.jsx
```bash


function Conditional (){
    const student = [
        {id : 1 , name :"yash" , passed:true},
        {id : 2 , name :"garcy" , passed:true},
        {id : 3 , name :"Mitansu" , passed:false},

    ]
    return(
        <div>
            {student.map((s)=>(
                <p key={s}>
                    {s.name} - {s.passed ? "Passed ✅" : "Failed ❌"}
                </p>
            ))}
        </div>
    )
}

export default Conditional;
```

### list.jsx
```bash
import React from "react";

function List (){
    const names =["yash", "kacha","girishbhai"]
    const students = [
        {id:1, name:"Yash" , age:34},
        {id:2 , name:"Gracy" , age:32}
    ]
    return(
        <div>
            {/* A list is just an array of items you want to display in your UI. In React, we use the .map() method to render each item. */}
            <h1>Name List</h1>
            <ul>
                {names.map((name, index) =>(
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <h1>List of Object</h1>
            <ul>
                {students.map((studentId) =>(
                    <p key={studentId.id}>
                        {studentId.name} - {studentId.age} year old
                    </p>
                ))}
            </ul>
        </div>
    )
}

export default List;
```

### task
```bash
import { useState } from "react";

function Task() {
  const students = [
    { id: 1, name: "Yash", marks: 85, passed: true },
    { id: 2, name: "Mitansu", marks: 45, passed: false },
    { id: 3, name: "Dhruv", marks: 75, passed: true },
    { id: 4, name: "Vandan", marks: 35, passed: false },
    { id: 5, name: "Vandan", marks: 35, passed: false },
  ];
  const [showPassing, setShowPassing] = useState(false);

  const passingStudents = students.filter(
    (studentPass) => studentPass.passed
  ).length;
  const notpassingStudents = students.filter(
    (studentPass) => !studentPass.passed
  ).length;

  return (
    <div>
      <p>Show All Students with highlight </p>
      <ul>
        {students.map((studentId) => (
          <li key={studentId.id}>
            {studentId.name} {studentId.marks}{" "}
            {studentId.passed ? "Passed ✅" : "Failed ❌"}
          </li>
        ))}
      </ul>

      <br />
      <p>Total Passing Students: {passingStudents}</p>
      <p>Total Fails Students: {notpassingStudents}</p>

      <br />

      <button onClick={() => setShowPassing(!showPassing)}>
        {showPassing ? "Show All students" : "Show only Passed Studem"}
      </button>
      <ul>
        {students
          .filter((studentss) => !showPassing || studentss.passed)
          .map((studentss) => (
            <li
              key={studentss.id}
              style={{ color: studentss.passed ? "green" : "red" }}
            >
              {studentss.name} - {studentss.marks} -{" "}
              {studentss.passed ? "Passed ✅" : "Failed ❌"}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Task;
```
### task2
```bash
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
```

### todo
```bash
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
          onChange={(e) => setNewTask(e.target.value)}
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
```

