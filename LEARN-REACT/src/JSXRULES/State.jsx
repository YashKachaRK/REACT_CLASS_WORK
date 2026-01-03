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
