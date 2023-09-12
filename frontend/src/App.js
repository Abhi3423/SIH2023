import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './components/Landing/landing';

function App() {
  return (
    <div className="w-[100%] h=[100%]">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
