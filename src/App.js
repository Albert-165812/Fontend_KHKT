import "../src/static/style/App.css";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer/Footer";
import Header from "./components/layouts/Header/Header";
import PAGE_HOME from "./components/pages/PAGE_HOME";
import PAGE_LESSON from "./components/pages/PAGE_LESSON";
import PAGE_DETECT from "./components/pages/PAGE_DETECT";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./static/style/_root.css"
function App() {
  return (
    <div
      className="APP">
      <Router>
      <Header />
        <div className="MAIN">
          <Routes>
            <Route path="/Fontend_KHKT/" exact element={<PAGE_HOME/>} />
            <Route path="/Fontend_KHKT/Page_1" exact element={<PAGE_DETECT/>} />
            <Route path="/Fontend_KHKT/Page_2" exact element={<PAGE_LESSON/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
