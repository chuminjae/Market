import logo from "./logo.svg";
import "./App.css";
import Mainpage from "./Main/index.js";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Uploadpage from "./upload/index.js";
import Productpage from "./product/index.js";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            {" "}
            upload{" "}
          </Button>
        </div>
      </div>
      <div id="body">
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
      <div id="footer"></div>
    </div>
  );
}

export default App;
