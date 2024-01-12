import './App.css';
import Navbar from './components/Navbar';
import Options from './components/Options';
import Search from './components/Search';
import List from './components/List';
import Review from './components/Review';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Singup';
import ProjectState from './context/projects/ProjectState';
import PremiumFeature from './components/PremiumFeature';
import Plan from './components/Plan';
import Chooseus from './components/Chooseus';
import Project from './components/Project'
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';

function App() {
  return (
    <>
      <ProjectState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Options />
              <Header/>
              <Search />
              <List title="Trending Properties" name="Atif" id="1" />
              <PremiumFeature />
              <List title="Top Builders" id="2" />
              <List title="Top Locations" id="3" />
              <Chooseus/>
              <Footer />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/singup">
              <Signup />
            </Route>
            <Route exact path="/subscribe">
              <Plan />
              <Footer />
            </Route>
            <Route exact path="/reviews">
              <Review />
              <Footer />
            </Route>
            <Route exact path="/services">
              <Services/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/project/:identification" component={Project}></Route>
          </Switch>
        </Router>
      </ProjectState>
    </>
  );
}

export default App;
