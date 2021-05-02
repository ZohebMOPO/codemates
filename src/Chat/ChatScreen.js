import React,{ useState} from 'react'
import './ChatScreen.css';
import { Avatar } from '@material-ui/core'; 

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "",
            image: "",
            message: ""
        },
        {
            message: ""
        }
    ])

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([prevState => [...prevState, currentState]]);
        setInput('')
    }


    return (
        <div className='chatScreen'>
            {messages.map((message) => 
            message.name ? (
                <div className='chatScreen__message'>
                    <Avatar className='chatScreen__image'
                    alt={message.name} 
                    src={message.image} />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
            ) : (
                <div className='chatScreen__message'>
                    <p className='chatScreen__textUser'>{message.message}</p>
                </div>
             )
            )}
            <form className='chatScreen__input'>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='chatScreen__inputField'
                type='text' 
                />
                <button onClick={handleSend} type='submit' className='chatScreen__inputButton'>
                    Send
                </button>
            </form>
        </div>
    )
}

export default ChatScreen
