import React from 'react'
import './error.css';

function Error() {
    return (
        <div className='mainbox'>
            <div className='err'>4</div>
            <div className='far fa-question-circle fa-spin'></div>
            <div className='err2'></div>
            <div className='msg'><p>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?</p></div>
        </div>
    )
}

export default Error
