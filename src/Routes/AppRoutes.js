import React from "react";
import { Switch, Route } from "react-router-dom";


import { Provider } from 'react-redux';
import { ConfigureStore } from '../Redux/Store/store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'
import NotFound from '../Pages/NotFound'

function AppRoutes () {
  const store = ConfigureStore()
  return (
    <Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Provider store={store}>
        <Route exact path='/' component={Home} />
      </Provider>
      <Route exact path='/dashboard' component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default AppRoutes