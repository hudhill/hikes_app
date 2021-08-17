import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header'
import NavBar from './components/NavBar'
import HikesContainer from './containers/HikesContainer';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';

const App = () => {

  return (
    <Router>
      {/* <Header /> */}
      {/* <NavBar /> */}
      <Switch>
        <Route exact path='/' component={HikesContainer} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
  
}

export default App;
