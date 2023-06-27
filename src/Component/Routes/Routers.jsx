import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HOme from "../Pages/Home/Home/HOme";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login&Registration/Login";
import Registration from "../Pages/Login&Registration/Registration";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Page404 from "../Pages/404Page/Page404";
import AllToys from "../Pages/AllToys/AllToys";

import ToyDetails from "../Pages/AllToys/toyDetails/ToyDetails";
import PrivetRoute from "./PrivetRoute";
import AllDetail from "../Pages/Home/ShopCategory/Category/AllDetail";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyTOy from "../Pages/MyToy/MyTOy";
import UpdateData from "../Pages/MyToy/UpdateData";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<HOme></HOme>
          
              
          
           
        },
        {
          path:'/:id',
          element:<PrivetRoute>
            <AllDetail></AllDetail>
          </PrivetRoute>,
          loader:({params})=>fetch(`https://manga-anime-shop-server.vercel.app/category/${params.category}/${params.id}`)
        },
        {
          path:'/allToys',
          element:<AllToys></AllToys>,
         
        },
        {
          path:'allToys/:id',
          element:<PrivetRoute>
          <ToyDetails></ToyDetails> ,

          </PrivetRoute>,
          loader:({params})=>fetch(`https://manga-anime-shop-server.vercel.app/all/${params.id}`)
          
       },
       {
        path:'/add',
        element:<PrivetRoute>
          <AddAToy></AddAToy>
        </PrivetRoute>

       },
       {
        path:'/myToys',
        element:<PrivetRoute>
          <MyTOy></MyTOy>
        </PrivetRoute>

       },
       {
        path:'/myToys/:id',
        element:<UpdateData></UpdateData>,
        loader:({params})=>fetch(`https://manga-anime-shop-server.vercel.app/addAToys${params.id}`)
       },

        {
           path:'/login',
           element:<Login></Login>
        },
        {
          path:'/register',
          element:<Registration></Registration> 
        },
        {
          path:'/about',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
        
      ]
    },
    {
      path:'*',
      element:<Page404></Page404>
    }
  ]);

  export default router;