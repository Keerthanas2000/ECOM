import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from "./pages/Men";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Beauty from "./pages/Beauty";
import Living from "./pages/Living";
import Details from "./pages/Details";
import CartDetails from "./screens/cartedItems";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/living" element={<Living />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<CartDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
