import '../src/static/style/App.css';
import * as React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Page_home from './pages/Page_home';
import Page_detect from './pages/Page_detect';
import Page_lesson from './pages/Page_lesson';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
  return (
    <div className='app'>
      <Router>
        <Header/>
          <div className="main">
            <Routes>
              <Route path='/' exact element={Page_home()} />
              <Route path='/Page_1' exact element={Page_detect()} />
              <Route path='/Page_2' exact element={Page_lesson()} />
            </Routes>
          </div>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
