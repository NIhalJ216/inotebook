import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NoteState from "./Context/notes/NoteState";
import Alerts from "./Components/Alerts";

// next video 67
// C:\Program Files\MongoDB\Server\4.2\bin mongod

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alerts message="Alert" />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
