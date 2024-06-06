import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import qsp from '../assets/assets'

const Dashboard = () => {
  return (
    <section >
    <nav>
        <div id='logo'><img src={qsp} alt="" /></div>
        <div className='nav-items'>
            <NavLink to={'/'} className='nav-item'>Home</NavLink>
            <NavLink to={'/addEmployee'  } className='nav-item'>AddEmployee</NavLink>
            <NavLink to={'/viewAll'} className='nav-item'>ViewAll</NavLink>


            

        </div>



    </nav>
    <Outlet/>
    </section>
  )
}

export default Dashboard