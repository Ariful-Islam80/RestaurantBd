import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import Foods from "../Pages/Foods/Foods";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import CheckOut from "../Pages/CheckOut/CheckOut";




const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async() => fetch('http://localhost:5000/foods')
            },
            {
                path: '/foods',
                element: <Foods></Foods>,
                loader: () => fetch('http://localhost:5000/foods')
            }, 
            {
                path: '/checkOut/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }

        ]
    },
]);

export default Router;