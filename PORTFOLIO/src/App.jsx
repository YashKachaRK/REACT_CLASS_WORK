
import MyComponent from "./Components";
import Props from "./Props";

function App() {
  const BtnClicked = () => {
    alert("Button Clicked");
  };
  return (
    <div>
      <p> Date :- 26-12-2025 </p>
      <MyComponent />
      <br/>
      <Props name="Yash Kacha" BtnClicked={BtnClicked} />
      <br/>
      <br/>

      <p>Date :- 29-12-2025</p>

      
    </div>
  );
}

export default App;
