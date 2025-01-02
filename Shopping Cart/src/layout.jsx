import Nav from "./Nav.jsx"
import { Outlet, useOutletContext } from "react-router-dom"

function Layout(){
    return(
        <>
            <Nav />
            <Outlet context={useOutletContext()}/>
        </>
    )
}

export default Layout