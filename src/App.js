import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Page7 from './pages/page7';
import Login from './pages/login';
import Hello from './pages/hello';
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" exact component={Home} />
        <Route path="/page4" exact component={Page4} />
        <Route path="/page5" exact component={Page5} />
        <Route path="/page6" exact component={Page6} />
        <Route path="/page7" exact component={Page7} />
        <Route path="/" exact component={Login} />
        <Route path="/hello" exact component={Hello} />
      </div>
    </Router>
  );
}

export default App;
