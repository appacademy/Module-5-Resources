import { Outlet, NavLink } from "react-router-dom"
import Switch from "./Switch"
import "./Layout.css"
import { useThemeContext } from "../context/ThemeContext"

export default function Layout() {
    const { theme } = useThemeContext()
    
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
                <Switch />
            </nav>

            <Outlet />
        </div>
    )
}