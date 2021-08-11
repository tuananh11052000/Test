import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/128255896_879142432822712_8831914308402454047_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=174925&_nc_ohc=SNUsSj8l0ZMAX_7kEEx&_nc_ht=scontent.fhph1-2.fna&oh=46fbfe7288eee43902393448136370d7&oe=6138B638" className="App-logo" alt="logo" />
    //     <img src="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/128255896_879142432822712_8831914308402454047_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=174925&_nc_ohc=SNUsSj8l0ZMAX_7kEEx&_nc_ht=scontent.fhph1-2.fna&oh=46fbfe7288eee43902393448136370d7&oe=6138B638" className="App-logo" alt="logo" />
    //     <img src="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/128255896_879142432822712_8831914308402454047_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=174925&_nc_ohc=SNUsSj8l0ZMAX_7kEEx&_nc_ht=scontent.fhph1-2.fna&oh=46fbfe7288eee43902393448136370d7&oe=6138B638" className="App-logo" alt="logo" />
    //   </header>
    // </div>
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
