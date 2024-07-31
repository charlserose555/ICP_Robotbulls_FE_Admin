import React, { useContext, Suspense, useEffect, lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import routes from "../../../routes/general";

import Main from "../main/Main";
import { useState } from "react";
import PageLoader from "../../../components/Loader/PageLoader";
import LoadingOverlay from "../../../components/Loader/LoadingOverlay";
import { useSelector } from "../../../store";
import Header from "../header/Header";

function Layout() {
  const { isLoggedIn } = useSelector(
    (state) => state.auth
  );
  const [delayed, setDelayed] = useState(true);
  const Page404 = lazy(() => import("../../404"));

  let location = useLocation();

  useEffect(() => {
    // Simulating a delay of 2 seconds
    const timer = setTimeout(() => {
      setDelayed(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div
      className="flex h-screen bg-gray-80 flex-row text-white">
      <div className="flex flex-col flex-1 w-full overflow-y-auto">
        <Header/>
        <Main>       
        <LoadingOverlay/>
          <Suspense fallback={<PageLoader />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  !isLoggedIn && route.auth ? (
                    <Route
                      key={i}
                      path={`/app${route.path}`}
                      render={() => <Redirect to="/" />}
                    />
                  ) : (
                    <Route
                      key={i}
                      path={`/app${route.path}`}
                      exact={true}
                      render={(props) => <route.component {...props} />}
                    />
                  )
                ) : null;
              })}
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
