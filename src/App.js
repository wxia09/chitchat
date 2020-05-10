import React from "react";
// import Index from "./views/index";
import Router from "./router/index";
import Context from "./context";
import { Provider } from "react-redux";
import reducers from "./reducers/index";

function App() {
  return (
    <Provider store={reducers}>
      <Context.Provider value={{}}>
        <Router />
      </Context.Provider>
    </Provider>
  );
}

export default App;
