import React from 'react';
import {Routes, BrowserRouter as Router  , Route } from 'react-router-dom' ;
import Home from './Home';
import Test from './Test';


function App() {
    return (
    <Router>
    <div>
    <Home/>
    <Routes>
    <Route exact path ="/" component={Home}/>
    <Route exact path = "/test" component={Test}/>
    </Routes>
    </div>
    </Router>
     );
    }
export default App;