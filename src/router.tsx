import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard";
import { LayoutApp } from "./pages/_layouts/app";
import { LayoutAuth } from "./pages/_layouts/auth";
import { Signin } from "./pages/auth/signin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutApp/>,
        children: [{ path: "/", element: <Dashboard /> }]
    },
    {
        path: "/",
        element: <LayoutAuth/>,
        children: [{ path: "/sign-in", element: <Signin /> }]
    }
    
])