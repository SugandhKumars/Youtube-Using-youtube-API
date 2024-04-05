import { Route, Routes } from "react-router-dom";
import Container from "./Components/Container";
import Navbar from "./Components/Navbar";
import "./index.css";
import PlayVideo from "./Components/PlayVideo";
import SearchResult from "./SearchResult";
function App() {
  return (
    <div className="mt-[0.1px]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Container />}></Route>
        <Route path="/video/:id" element={<PlayVideo />} />
        <Route path="/search/:result" element={<SearchResult />} />
      </Routes>
    </div>
  );
}

export default App;
