import React from 'react'
import Footer from './footer/Footer'
import { ResponsiveNav } from './responsive-nav/ResponsiveNav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <ResponsiveNav />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout