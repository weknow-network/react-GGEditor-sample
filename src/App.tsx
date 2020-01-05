import React from "react";
import style from "./App.module.css";
// import { Router, Route, Switch } from "react-router-dom";
// import { createBrowserHistory } from "history";
import { FlowPage } from "./components";

// const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div className={style.App}>
      <FlowPage/>
      {/* <Router history={history}>
        <Switch>
          <Route path="/GGEditor" component={GGEditorSample} />
          <Route path="/FlowPage" component={FlowPage} />
          <Route path="/Layout" component={LayoutTest} />
          <Route path="/" component={CompHome} />
          <Route component={FlowPage} />
        </Switch>
      </Router> */}
    </div>
  );
};

export default App;
