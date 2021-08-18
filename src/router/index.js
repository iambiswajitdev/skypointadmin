import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { FrontLayout, AppRouter, UnauthorizeLayout } from "./routerUtility";

import Dashboard from "../pages/dashboard";
import ApiManagment from "../pages/api-managment";
import AccountManagment from "../pages/acount-managment";
import DiscountManagment from "../pages/discount-managment";
import UserManagment from "../pages/user-managment";
import Manager from "../pages/manager";
import Reports from "../pages/reports";
import UpiId from "../pages/upi-id";
import Services from "../pages/services";
import Login from "../pages/login";
import ForgotPassword from "../pages/forgot-password";
import Register from "../pages/register";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppRouter layout={FrontLayout} path="/" exact component={Dashboard} />
        <AppRouter
          layout={FrontLayout}
          path="/user-managment"
          exact
          component={UserManagment}
        />
        <AppRouter
          layout={FrontLayout}
          path="/services"
          exact
          component={Services}
        />
        <AppRouter
          layout={FrontLayout}
          path="/discount-managment"
          exact
          component={DiscountManagment}
        />
        <AppRouter
          layout={FrontLayout}
          path="/acount-managment"
          exact
          component={AccountManagment}
        />
        <AppRouter
          layout={FrontLayout}
          path="/api-managment"
          exact
          component={ApiManagment}
        />
        <AppRouter
          layout={FrontLayout}
          path="/manager"
          exact
          component={Manager}
        />
        <AppRouter
          layout={FrontLayout}
          path="/reports"
          exact
          component={Reports}
        />
        <AppRouter
          layout={FrontLayout}
          path="/upi-id"
          exact
          component={UpiId}
        />
        <AppRouter
          layout={UnauthorizeLayout}
          path="/login"
          exact
          component={Login}
        />
        <AppRouter
          layout={UnauthorizeLayout}
          path="/forgot-password"
          exact
          component={ForgotPassword}
        />
        <AppRouter
          layout={UnauthorizeLayout}
          path="/register"
          exact
          component={Register}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
