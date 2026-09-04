import Nav from "./nav";
import Home from "./home";
import Therd from "./therd";
import Seconde from "./seconde";
import Foruth from "./foruth";
import Five from "./five";
import Six from "./six";
import Footer from "./footer";

import OceanBackground from "./component/oceanBackground";

import "./tailwind.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function Portfolio() {
  return (
    <>
      <Home />
      <Seconde />
      <Therd />
      <Foruth />
      <Five />
      <Six />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <div className="relative min-h-screen">

        {/* Wallpaper */}
        <OceanBackground />

        {/* Navbar */}
        <div className="relative z-20">
          <Nav />
        </div>

        {/* Pages */}
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Portfolio />}
          />

          {/* About */}
          <Route
            path="/about"
            element={<Therd />}
          />

          {/* Services */}
          <Route
            path="/services"
            element={<Home />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Home />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;