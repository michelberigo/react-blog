import React from "react";
import { Route, BrowserRouter, Switch  } from "react-router-dom";

import Posts from "./components/post/Posts";
import PostVer from "./components/post/PostVer";
import PostEditar from "./components/post/PostEditar";
import PostCriar from "./components/post/PostCriar";

import Navbar from './components/layout/Navbar'

const Routes = () => {
   return (
        <BrowserRouter>
            <Navbar />

            <Switch>
                <Route component = { Posts } path="/" exact />
                <Route component = { PostCriar } path="/posts/create" exact />
                <Route component = { PostEditar } path="/posts/:id/edit" exact />
                <Route component = { PostVer } path="/posts/:id" exact />
            </Switch>
        </BrowserRouter>
   )
}

export default Routes;