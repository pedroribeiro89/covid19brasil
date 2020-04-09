import React from 'react';
import './App.css';
import {ApplicationRoutes} from "./ApplicationRoutes";
import {Style} from "./styles";

function App() {
    return (
      <div style={Style.main}>
          <ApplicationRoutes />
      </div>
  );
}

export default App;

