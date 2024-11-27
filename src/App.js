// App.js
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import { routePath } from "./routes/constant";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routePath.login} component={Login} />
        <ProtectedRoute path={routePath.dashboard} component={Dashboard} />
        <Redirect exact from="/" to={routePath.login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
