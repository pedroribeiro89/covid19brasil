import React from "react";
import {Route} from "react-router-dom";
import Home from "./components/Home";
import CountryDashboard from "./components/CountryDashboard";



export const ApplicationRoutes = () => (
    <>
        <Route path="/" exact component={Home} />
        <Route path="/:name"  component={CountryDashboard} />
    </>
);
