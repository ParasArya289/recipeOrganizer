import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { Recipe } from "./Pages/Recipe/Recipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
