import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Login from './pages/login';
import Hello from './pages/hello';
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" exact component={Home} />
        <Route path="/page1" exact component={Page1} />
        <Route path="/page2" exact component={Page2} />
        <Route path="/page3" exact component={Page3} />
        <Route path="/" exact component={Login} />
        <Route path="/hello" exact component={Hello} />
      </div>
    </Router>
  );
}

export default App;
