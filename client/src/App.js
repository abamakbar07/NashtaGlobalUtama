import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './pages/components/Navbar'
import Home from './pages/home/Home';
import FormAddEvent from './pages/form/FormAddEvent';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-event" exact component={FormAddEvent} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
