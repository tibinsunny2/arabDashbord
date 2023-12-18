import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  // implimenting lazy loading for the application
  const Home = lazy(() => import("./Pages/Home/Home.jsx"));
  const Bonus = lazy(() => import("./Pages/Bonuspage/BonusPage.jsx"));
  return (
    <div className="App"style={{overflowY:"hidden",overflowX:"hidden"}}>
      <Router>
        <Suspense fallback={<div style={{color:"red"}}>Loading .......</div>}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Bonus" element={<Bonus/>}/>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
