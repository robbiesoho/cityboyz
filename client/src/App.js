import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Articles from "./components/Articles";
import ArticleShow from "./components/ArticleShow";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <AppNavbar />
    //     <Container>
    //       <ArticleList />
    //     </Container>
    //   </div>
    // </Provider>
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Articles} />
            <Route exact path="/article/:id" component={ArticleShow} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
