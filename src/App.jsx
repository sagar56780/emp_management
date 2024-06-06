import React from 'react'
import Dashboard from './components/Dashboard'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';
import ViewAll from './components/ViewAll';

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