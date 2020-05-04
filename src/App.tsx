import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReactQueryConfigProvider } from "react-query";

import Layout from "./containers/Layout";
import Home from "./components/Home";

const queryConfig = {
  retry: 3,
  throwOnError: true,
  refetchAllOnWindowFocus: false,
  // Query results are cached for 10 seconds
  staleTime: 10 * 1000,
};

function App() {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Layout>
    </ReactQueryConfigProvider>
  );
}

export default App;
