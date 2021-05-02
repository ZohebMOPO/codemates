import React from 'react';
import './option.css'
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Options({ incrementUser, decrementUser }) {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__left' onClick={ decrementUser }>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__right' onClick={incrementUser}>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Options
