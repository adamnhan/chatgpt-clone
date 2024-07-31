import { Link } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation'

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
                    <img src="/bot.png" alt="" className='bot'/>
                    <div className="chat">
                        <img src="/bot.png" alt="" />
                        <TypeAnimation 
                            sequence={[
                            "Human: a;slkdjf;laskdjf;lkjsaldfj",
                            1000,
                            "Robot: alsdkjlskjdflkjsldkjflksjdf",
                            1000,
                            "Human2: alksdjlfkjsdlkfjlskdjflksjdf",
                            1000,
                            ]}
                            wrapper='span'
                            repeat={Infinity}
                            cursor={true}
                            omitDeletionAnimation={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage