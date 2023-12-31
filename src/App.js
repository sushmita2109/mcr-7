import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Country } from "./Pages/Country";
import { Destination } from "./Pages/Destination";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:continentId" element={<Country />} />
        <Route path="/destination/:countryId" element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;
