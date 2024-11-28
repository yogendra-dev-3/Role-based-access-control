import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import { routePath } from "./routes/constant";
import AppProvider from "./context/contex";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Route path={routePath.login} component={Login} />
          <ProtectedRoute path={routePath.dashboard} component={Dashboard} />
          <Redirect exact from="/" to={routePath.login} />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
