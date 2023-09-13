import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './components/Landing/landing';
import Upload from './components/dashboard/upload';
import Dashboard from './components/dashboard/dashboard';
import { GoogleOAuthProvider } from "@react-oauth/google"

function App() {
  return (
    <GoogleOAuthProvider  clientId="699628481187-np8ttkfudojv0indq5fvc49lsd1bf5d2.apps.googleusercontent.com">
      <div className="w-[100%] h=[100%]">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
