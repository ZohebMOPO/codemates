import React from 'react'
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum'
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
{/*import { Link } from 'react-router-dom';*/}


function Header(backButton) {
    return (
        <div className='header'>
            {backButton ? (
                <IconButton>
                    <ArrowBackIosIcon fontSize='large' className='header__icon'/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize ='large' className='header__icon'/>
                </IconButton>
            )}

        </div>
    )
}

export default Header


{/*<Link to='/chat'>
  <IconButton>
      <ForumIcon fontSize='large' className='header__icon' />
  </IconButton>
</Link>
      */}
