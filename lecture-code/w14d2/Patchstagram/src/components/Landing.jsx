import { useNavigate } from "react-router-dom"



export default function Landing() {
    const navigate = useNavigate()
    return (
        <>
            <h1>Welcome to Patchstagram!</h1>
            <img
                src='https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png'
                alt="tuxedo-cat-image"
                className="landing-logo"
                onClick={ () => navigate("/posts")} 
            />
        </>
    )
}