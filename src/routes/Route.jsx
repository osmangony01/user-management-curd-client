import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import AddUser from "../components/AddUser/AddUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            
            },
            {
                path: '/addUser',
                element: <AddUser></AddUser>
            }
        ]
    }
]);

export default router;