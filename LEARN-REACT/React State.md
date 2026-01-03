Perfect 👍
Let’s learn **State & Events in React** step-by-step, with **simple examples** (very important topic).

---

# 🔹 React State

### ✅ What is State?

* State = **data that can change**
* When state changes → **UI re-renders**
* Used for:

  * counters
  * input values
  * toggles (dark/light)
  * form data

---

## 🧠 `useState` Hook

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

### 🔍 Explanation

```js
const [count, setCount] = useState(0);
```

* `count` → current state value
* `setCount` → function to update state
* `0` → initial value

---

# 🔹 Events in React

### ✅ What is an Event?

User actions like:

* click
* input change
* submit
* mouse over

React uses **camelCase events**:

* `onClick`
* `onChange`
* `onSubmit`

---

## 🖱️ Click Event Example

```jsx
function ClickExample() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

---

## 🔁 State + Event (Most Common Pattern)

```jsx
import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}

export default LikeButton;
```

---

# 🔹 Input Handling (Important)

```jsx
import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}
```

---

# 🔹 Form Submit Event

```jsx
function FormExample() {
  function handleSubmit(e) {
    e.preventDefault(); // stop page reload
    alert("Form submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

# ⚠️ Common Mistakes (Very Important)

❌ Wrong:

```jsx
<button onClick={handleClick()}>
```

✅ Correct:

```jsx
<button onClick={handleClick}>
```

---

# 🧪 Mini Practice for You

👉 Try this:

* Make a **counter with + and –**
* Make **show / hide text**
* Make **dark / light toggle**

If you want, I can:

* 🔹 Give **interview questions**
* 🔹 Make a **small project (Todo App)**
* 🔹 Explain **state vs props**

Just tell me 😊


### App.jsx
```bash

```

### State.jsx
```bash
import { useState } from "react";

function State() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop reload
    alert(`Form submitted! Name: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
     
      <button type="submit">Submit</button>
    </form>

   
  );
}

export default State;

```

```bash
import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const [dark , setDark] = useState(false)

  return (
    <div>
      <h1>Count : {count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <br />
      <br />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={() => setShowText(!showText)}>
          {showText ? "Hide" : "Show"} Text
        </button>

        {/* {showText && <p>True</p>}
        {!showText && <p>False</p>} */}

        {showText && (
          <p style={{ marginTop: "20px", fontSize: "18px" }}>
            This is the text you can show or hide!
          </p>
        )}

        {!showText && (<p>Nothing</p>)}
      </div>


        <button onClick={() => setDark(!dark)}>
            {dark ? "light" :"dark"}
        </button>

        {dark && (
            <p style={{backgroundColor :"black"}}>Yash</p>
        )}
    </div>
  );
}

export default State;

```