import React from "react";
// import Index from "./views/index";
import Router from "./router/index";
import Context from "./context";
import { Provider } from "react-redux";
import reducers from "./reducers/index";

function App() {
  return (
    <div>
      <Provider store={reducers}>
        <Context.Provider value={{}}>
          <Router />
        </Context.Provider>
      </Provider>
    </div>
  );
}

export default App;
