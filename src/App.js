import "./App.css";
import Home from "./Home";
import Layout from "./Layout";
import Abc from "./Abc";
import Numbers from "./Numbers";
import NumSet from "./NumSet";
import Signs from "./Signs";
import Contact from "./Contact";
import Request from "./Request";
import RequestCheck from "./RequestCheck";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/abc",
                element: <Abc />,
            },
            {
                path: "/numbers",
                element: <Numbers />,
            },
            {
                path: "/numset",
                element: <NumSet />,
            },
            {
                path: "/signs",
                element: <Signs />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/request",
                element: <Request />,
            },
            {
                path: "/requestcheck",
                element: <RequestCheck />,
            },
        ],
    },
]);

function App() {
    return (
        <div className="App">
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;
