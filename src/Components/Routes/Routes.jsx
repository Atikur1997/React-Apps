import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/ErrorPage/Errorpage';
import Home from '../Home/Home';
import Apps from '../Pages/Apps/Apps';
import AppDetails from '../AppDetails/AppDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                index: true,
                loader: () => fetch('/HomeApp.json'),
                path: '/',
                Component: Home,
            },
            {
                path: '/apps',
                loader: () => fetch('/AllApps.json'),
                Component: Apps,
            },
            {
                path: '/AppDetails/:id',
                loader: () => fetch('/AllApps.json'),
                Component: AppDetails,
            }
        ]
    },
]);
