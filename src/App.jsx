import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import ViewAll from './components/ViewAll';
import ViewMore from './components/ViewMore';
import UpdateEmployee from './components/UpdateEmployee';

const App = () => {
    let router=createBrowserRouter([
        {
            path:"/",
            element:<Dashboard/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/addEmployee',
                    element:<AddEmployee/>
                },
                {
                    path:'/viewAll',
                    element:<ViewAll/>
                }
                ,
                {
                    path:"/viewMore/:id",
                    element:<ViewMore/>
                },
                {
                    path:"/updateEmployee/:id",
                    element:<UpdateEmployee/>
                   
                }

            ]
        },

    ]);

  return (
    <>
    {
        <RouterProvider router={router}/>
    }

    </>
  )
}

export default App