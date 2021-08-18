import "./App.css";
import "./Animate.css";

import { Switch, Route } from "react-router-dom";
import { Main, Test, Result, Loader } from "./components/index";
function App() {
  return (
    <Switch>
      <Route exact path={"/"} component={Main} />
      <Route path={"/test"} component={Test} />
      <Route path={"/result"} component={Result} />
      <Route path={"/loading"} component={Loader} />
    </Switch>
  );
}

export default App;
