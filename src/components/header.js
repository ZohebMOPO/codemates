import React from 'react'
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import {Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function Header(backButton) {
    return (
        <div className='header'>
            {backButton ? (
                <IconButton>
                    <ArrowBackIosIcon fontSize='large' className='header__icon'/>
                </IconButton>
            ) : (
                <IconButton>
                    <ArrowBackIosIcon fontSize='large' className='header__icon' />
                </IconButton>
            )}

        </div>
    )
}

export default Header
