import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard";
import { LayoutApp } from "./pages/_layouts/app";
import { LayoutAuth } from "./pages/_layouts/auth";
import { Signin } from "./pages/auth/signin";
import { Signup } from "./pages/auth/signup";
import { Orders } from "./pages/app/orders/orders";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutApp/>,
        children: [
            { path: "/", element: <Dashboard /> },
            { path: "/orders", element: <Orders /> }
        ]
    },
    {
        path: "/",
        element: <LayoutAuth/>,
        children: [
            { path: "/sign-in", element: <Signin /> },
            { path: "/sign-up", element: <Signup /> }
        ]
    }
    
])