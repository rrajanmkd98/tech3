import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DetailsPage from "../src/page/DetailsPage";
import { Provider } from 'react-redux';
import Reducer from "../src/Reducer";
import { createStore } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const store = createStore(Reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
     <Router>
       <Switch>
         <Route exact path="/" component={App}/>
         <Route path="/DetailsPage" component={DetailsPage}/>
       </Switch>
     </Router>
  </Provider>,
  rootElement
);
