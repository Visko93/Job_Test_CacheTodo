import React from "react";
import { Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Provider } from "react-redux";
import store from '../Redux/Store/index'

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
        {/* componentes que terão acesso a store */}
        <Provider store={store}>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Provider>

        <Route exact path='/about' component={About}/>
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default AppRoutes