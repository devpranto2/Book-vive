import { createBrowserRouter } from "react-router";
import React from "react";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ToTheList from "../Pages/ToTheList/ToTheList";
import Readlist from "../Pages/Readlist/Readlist";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
     children:[
        {
            index:true,
            loader:()=>fetch('/booksData.json'),
            path:'/',
            Component:Home,
        },
        {
          path:'about',
          Component:About
        },
        {
          path:'contact',
          Component:Contact
        },
        {
          path:'list',
          Component:ToTheList
        },
        {
            path:'readlist',
            loader:()=>fetch('/booksData.json'),
            Component:Readlist,
        },
        {
          path:'/bookDetails/:id',
          loader:()=>fetch('/booksData.json'),
          Component:BookDetails

        }
     ]
  },
]); 

