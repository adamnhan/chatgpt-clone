import { Link } from 'react-router-dom'
import './chatList.css'

const ChatList = () => {
  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to="/dashboard">Create a new Chat</Link>
        <Link to="/">Explore ATHENA AI</Link>
        <Link to="/">Contact</Link>
        <hr/>
        <span className='title'>RECENT CHATS</span>
        <div className="list">
            <Link>My chat title</Link>
        </div>
        <hr/>
        <div className='upgrade'>
            <img src="/logo.png" alt="" />
            <div className="texts">
                <span>Upgrade to Athena AI Pro</span>
                <span>Get Unlimited access to all features</span>
            </div>
        </div>
    </div>
  )
}

export default ChatList