import { useNavigate } from "react-router-dom"

import "./Landing.css"

export default function Landing(){
    const navigate = useNavigate()
    return (
        <div className="landing-container">
            <h1>Welcome to Patchstagram!</h1>
            <img 
                style={
                    { height: "300px" }
                } 
                src="https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png" 
                alt="cute-kitty-image"
                onClick={ () => navigate("/posts") }
            />
        </div>
    )
}