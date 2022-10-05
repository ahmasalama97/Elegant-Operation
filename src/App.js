import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext";
import routes from "./components/pages/index";

const App = () => {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
};

export default App;
