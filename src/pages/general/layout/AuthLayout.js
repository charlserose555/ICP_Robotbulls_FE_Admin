import auth from "../../../routes/general/auth";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

const AuthLayout = () => {
    return (
        <>        
        <Switch>
              {auth.map((route, i) => {
                return route.component ? (
                <Route
                    key={i}
                    exact={true}
                    path={`/auth${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
            </Switch>
        </>
    );
};

export default AuthLayout;