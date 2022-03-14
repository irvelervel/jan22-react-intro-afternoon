import "./App.css";
import { MyTitle } from "./components/MyTitle";
import MyNavbar from "./components/MyNavbar";
import ClassComponent from "./components/ClassComponent";

function App() {
  console.log("hello!");

  return (
    <div className="App">
      <MyNavbar />
      <MyNavbar customColor="yellow" />
      <header className="App-header">
        {/* <h2>Afternoon Project</h2>
        <button onClick={() => alert("well done!")}>CLICK ME!</button>
        <MyTitle /> */}
        <ClassComponent title="Class component here!" />
        <ClassComponent title="Class component here!" />
        <ClassComponent title="Class component here!" />
      </header>
    </div>
  );
}

export default App;

// PROPS
// STATE
