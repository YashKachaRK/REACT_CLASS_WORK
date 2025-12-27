
import MyComponent from "./Components";
import Props from "./Props";

function App() {
  const BtnClicked = () => {
    alert("Button Clicked");
  };
  return (
    <div>
      <MyComponent />

      {/* <Props name="Yash Kacha" BtnClicked={BtnClicked} /> */}

    </div>
  );
}

export default App;
