import logo from "./logo.svg";
import "./App.css";
import Mainpage from "./Main/index.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Uploadpage from "./upload/index.js";
import Productpage from "./product/index.js";
function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={"/"}>
          <Mainpage />
        </Route>
        <Route exact={true} path="/products/:id">
          <Productpage />
        </Route>
        <Route exact={true} path="/upload">
          <Uploadpage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
