import React from "react";
import { Switch, Route } from "react-router-dom";


// import { Provider } from 'react-redux';
// import { ConfigureStore } from '../Redux/Store/store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import Navigation from "../Components/common/Navigation";
import Home from '../Pages/Home'
import About from '../Pages/About'
import Dashboard from '../Pages/Dashboard'
import NotFound from '../Pages/NotFound'

function AppRoutes () {
  // const store = ConfigureStore()
  return (
    <>
      <Navigation />
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        {/* <Provider> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
        {/* </Provider> */}
        <Route exact path='/about' component={About}/>
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default AppRoutes