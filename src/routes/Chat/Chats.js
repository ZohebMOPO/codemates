import Chat from './Chat'
import React from 'react';
import './Chats.css';

function Chats() {
    
    return (
        <div>
            <div className='chats'>
                <Chat
                 name=''
                 message=''
                 timestamp=''
                 profilePic=''
                 />
            </div>
        </div>
    )
}

export default Chats
