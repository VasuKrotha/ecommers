import "./App.css";
import { Header } from "./components";
import { Allroutes } from "./routes/Allroutes";
function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Header />
      <Allroutes />
      {/* <Fotter /> */}
    </div>
  );
}

export default App;
