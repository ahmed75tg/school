import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./components/students";
import Grades from "./components/grade";
import Home from "./components/home";
import Primary from "./components/primary";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/school" element={<Home />}/>
        <Route path="/grades" element={<Grades />}/>
        <Route path="/students" element={<Students />}/>
        <Route path="/primary" element={<Primary />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
