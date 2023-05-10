import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
]);

export default router;