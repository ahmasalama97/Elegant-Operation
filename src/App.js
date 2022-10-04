import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./components/pages/index";

const App = () => {
  return (
    <BrowserRouter>
      {routes.map((data, idx) => (
        <Route
          exact
          path={data.path}
          component={data.component}
          key={idx}
        ></Route>
      ))}
    </BrowserRouter>
  );
};

export default App;
