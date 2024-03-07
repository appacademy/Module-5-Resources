import { useNavigate } from "react-router-dom"
import "./Landing.css"

export default function Landing(){
    const navigate = useNavigate()


    return (
        <div className="landing-container">
            <h1 className="landing-title">Welcome to Patchstagram!</h1>
            <img 
                style={
                    { height: "300px" }
                } 
                src="https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png" 
                alt="cute-kitty-image"
            />
            <p className="landing-subtitle">The cat with so much to talk about, he needs his own social media site!</p>
            <button
                className="landing-button"
                onClick={ () => navigate("/feed")}
            >
                Enter Site
            </button>
        </div>
    )
}