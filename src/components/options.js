import React from 'react';
import './option.css'
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';
import constants from '../api/constants';

function Options({ incrementUser, decrementUser, id }) {
    const addFriend = () => {
        incrementUser();
        axios.post(`${constants.API_HOST}/api/match/friend/${id}`, {}, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(result => {
            incrementUser();
        }).catch(err => {
            alert("You have already friended that user!");
            incrementUser();
        });
    }
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__left' onClick={ decrementUser }>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__right' onClick={ addFriend }>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Options
