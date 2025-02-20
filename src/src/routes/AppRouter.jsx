import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from '../App';
import { ItemDetail } from '../pages/itemDetail';       
import { Login } from '../pages/login';
import { Sobre } from '../pages/sobre';
import { PageTeste } from '../pages/pagetest';

export function AppRouter() {
    const router = createBrowserRouter([
        { path:"/", element:<App/>  },
        { path:"/home", element:<App/>},
        { path:"/detail", element:<ItemDetail/>},
        {path:"/login", element:<Login/>},
        {path: "/sobre", element: <Sobre />},
        {path:"/teste", element:<PageTeste/>}      
    ])
return(
    
      <RouterProvider router={router}/>
    
    )
}      
