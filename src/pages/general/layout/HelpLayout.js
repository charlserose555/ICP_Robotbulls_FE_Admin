import { useSelector } from "../../../store";
import auth from "../../../routes/general/help";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

const HelpLayout = () => {
    return (
        <>        
        <Switch>
              {auth.map((route, i) => {
                return route.component ? (
                <Route
                    key={i}
                    exact={true}
                    path={`/help${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
            </Switch>
        </>
    );
};

export default HelpLayout;