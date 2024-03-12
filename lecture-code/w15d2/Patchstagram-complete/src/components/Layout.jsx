import { Outlet, NavLink, Navigate } from "react-router-dom"
import Switch from "./Switch"
import "./Layout.css"
import { useThemeContext } from "../context/ThemeContext"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../store/usersReducer"

export default function Layout() {
    const sessionUser = useSelector( state => state.usersState.sessionUser)
    const { theme } = useThemeContext()
    const dispatch = useDispatch()

    
    return (
        <div>
            <nav className={`navbar-links-container ${theme}`}>
                <div className="navbar-subcontainer">
                    <img
                        className='navbar-logo'
                        src="https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png"
                        alt="cute-kitty-image"
                    />
                    <h2 className='navbar-title'>Patchstagram</h2>
                </div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/feed">Feed</NavLink>
                <NavLink to="/new">New Post</NavLink>
                <div>
                    <span>CurrentUser:</span>
                    { sessionUser
                        ? <span>{ sessionUser.username }</span>
                        :  <Navigate to="/" /> 
                    }
                </div>
                <button onClick={ () =>  dispatch(logoutUser()) }>Logout</button>
                <Switch />
            </nav>

            <Outlet />
        </div>
    )
}