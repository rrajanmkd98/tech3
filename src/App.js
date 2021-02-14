import react from 'react';
import "./styles.css";
import HomePage from "../src/page/HomePage";

class App extends react.Component {
    render(){
      return (
      <div className="container">
        <HomePage />
      </div>
      );
    }
}

export default App;