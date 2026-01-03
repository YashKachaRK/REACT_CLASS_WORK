Perfect 👍
This is a **very important React topic**. I’ll explain it **simply + practically**.

---

# 🔹 PROPS & REUSABLE COMPONENTS (React)

---

## ✅ 1️⃣ WHAT ARE PROPS?

**Props = properties**
👉 Used to **send data from parent to child component**

Think like:

```js
function add(a, b) { }
```

Here `a` and `b` are like **props**.

---

## ✅ 2️⃣ BASIC PROPS EXAMPLE

### 🔹 Parent Component (`App.jsx`)

```jsx
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <ProfileCard
      name="Yash Kacha"
      role="Full Stack Developer"
      bio="Learning React + Tailwind"
    />
  );
}

export default App;
```

---

### 🔹 Child Component (`ProfileCard.jsx`)

```jsx
function ProfileCard(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Role: {props.role}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default ProfileCard;
```

📌 Props are **read-only** (cannot change inside child).

---

## ✅ 3️⃣ PROPS USING DESTRUCTURING (BEST PRACTICE 🔥)

```jsx
function ProfileCard({ name, role, bio }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}
```

---

## ✅ 4️⃣ REUSABLE COMPONENT (WHY IMPORTANT?)

One component → use **many times with different data**

### 🔹 Reuse `ProfileCard`

```jsx
<ProfileCard
  name="Yash"
  role="Frontend Dev"
  bio="React + Tailwind"
/>

<ProfileCard
  name="Amit"
  role="Backend Dev"
  bio="Spring Boot"
/>
```

🔥 Same UI, different data

---

## ✅ 5️⃣ SPECIAL PROP: `children`

Used when you want **content inside component tags**.

### 🔹 Card Component

```jsx
function Card({ children }) {
  return (
    <div className="border p-4 rounded">
      {children}
    </div>
  );
}
```

### 🔹 Usage

```jsx
<Card>
  <h2>Profile</h2>
  <p>Yash Kacha</p>
</Card>
```

---

## 🛠 PRACTICE TASK (DO THIS)

### 🎯 Task: Create a **Reusable Card Component**

### Requirements:

1. Create `Card.jsx`
2. Accept props:

   * `title`
   * `description`
3. Use it **2 times** in `App.jsx` with different data

---

### 🔹 Expected Usage

```jsx
<Card
  title="React"
  description="Frontend library"
/>

<Card
  title="Spring Boot"
  description="Backend framework"
/>
```

---

## 🎯 SUMMARY

✔ Props pass data
✔ Components become reusable
✔ `children` makes layout flexible

---

### 👉 Next Step?

Say **“Give task solution”** or **“Next topic” (useState)** 🚀


### App.jsx
```bash
import Props from "./JSXRULES/Props";


function App() {
  return <>
    <Props 
      title = "React"
      description = "Fronted"
    />

     <Props 
      title = "Spring Boot"
      description = "Back"
    />
  </>;
}

export default App;
```

### Props.jsx
```bash
function Props({ title, description }) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <p className="font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default Props;

