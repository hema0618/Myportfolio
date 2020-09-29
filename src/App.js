import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./container.css";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-5">
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
