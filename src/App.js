import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import Components
import Home from './components/Home'
import Search from './components/Search'
import Charecter from './components/Charecter'
import Anime from './components/Anime'

//Importing HOC
import Footer from './HOC/Footer/Footer'
import Header from './HOC/Header/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
        <Route path="/charecter" exact component={Charecter} />
        <Route path="/anime" exact component={Anime} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
