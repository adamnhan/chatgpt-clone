import { Link } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
    return (
        <div className='homepage'>
            <img src="/orbital.png" alt="" className='orbital' />
            <div className="left">
                <h1>ATHENA AI</h1>
                <h2>Supercharge your creativity and productivity</h2>
                <h3>Skibidi toilet filler text</h3>
                <Link to="/dashboard">Get Started</Link>
           </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/bot.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Homepage