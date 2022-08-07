import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Component/Home'
import Create from "./Pages/Create";
import Delete from "./Pages/Delete";
import List from "./Pages/List";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="delete" element={<Delete />} />
        <Route path="list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
