import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div className="App">
      <Router>
        <MainNavigation/>
          <main>
            <Switch>
              <Route path="/" exact>
                <Users />
              </Route>
              <Route path="/places/new" exact>
                <NewPlace />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
      </Router>
    </div>
  );
};

export default App;
