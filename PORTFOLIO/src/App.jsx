
import ToDo from "./ToDo";
import T from "./TASK1";
import MyComponent  from "./Components";
import Props from "./Props";
// function App(){
//   const name ="Yash kacha";
//   return(
//     // <div>
//     //   {/* <h1>First</h1>
//     //   <App2></App2>
//     //   <Login></Login> */}


//     //   <button onClick={()=>alert("Hello")}>
//     //     Click
//     //   </button>

      
//     // </div>
//     // <div>
//     //     <ToDo/>
//     // </div>


//       <div>

//       </div>
//   )
// }



// function App2(){
//   return(
//     <h2>Yash kacha</h2>
//   )
// }


// function App(){
//   const name = "Yash kacha";

//   return(
//     <div>
//       {name}
//       <ToDo/>
//     </div>
//   )
// }

function App(){
  const BtnClicked = () =>{
    alert("Button Clicked");
  }
  return(
    <div>
      {/* <MyComponent/> */}

      <Props name = "Yash Kacha" BtnClicked = {BtnClicked}/>
      
    </div>
  )
}

export default App;