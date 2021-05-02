import React from 'react';
import './option.css'
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Options() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__left'>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__right'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Options
