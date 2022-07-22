import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Tickets from "./components/layout/Tickets";
import Footer from "./components/layout/Footer";
import Confirmed from "./components/layout/Confirmed";
import Calendar from "./components/layout/Calendar";
import Merchandise from "./components/layout/Merchandise";
import News from "./components/layout/News";
import Article from "./components/layout/Article";
import Product from "./components/layout/Product";
import Question from "./components/layout/Question";
import Quiz from "./components/layout/Quiz";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Landing />} />
                        <Route exact path="/tickets" element={<Tickets />} />
                        <Route exact path="/confirmed" element={<Confirmed />} />
                        <Route exact path="/calendar" element={<Calendar />} />
                        <Route exact path="/merchandise" element={<Merchandise />} />
                        <Route exact path="/news" element={<News />} />
                        <Route exact path="/article" element={<Article />} />
                        <Route exact path="/product" element={<Product />} />
                        <Route exact path="/question" element={<Question />} />
                        <Route exact path="/quiz" element={<Quiz />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
