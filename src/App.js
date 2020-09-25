import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "./Routes/AppRoutes";
import Navigation from "./Components/common/Navigation";


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
