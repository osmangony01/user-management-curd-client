import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";
import AddUser from "../components/AddUser/AddUser";
import LoadUsers from "../loader/LoadUser";
import UpdateUser from "../components/UpdateUser/UpdateUser";
import LoadUserOne from "../loader/LoadUserOne";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: LoadUsers
            },
            {
                path: '/addUser',
                element: <AddUser></AddUser>
            },
            {
                path: '/updateUser/:id',
                element: <UpdateUser></UpdateUser>,
                loader: LoadUserOne
            }
        ]
    }
]);

export default router;