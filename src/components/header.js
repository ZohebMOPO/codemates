import React, { useState }from 'react'
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum'
import { IconButton } from '@material-ui/core';
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function Header(backButton) {
  const [click, setClick] = useState(false);

    return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick="">
            CODEMATES
          </Link>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className="nav-links" onClick="">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/achievements' className="nav-links" onClick="">
                Achievements
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-links" onClick="">
                Join In
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/log-out' className="nav-links" onClick="">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>

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
  </>
    )
}

export default Header


{/*<Link to='/chat'>
  <IconButton>
      <ForumIcon fontSize='large' className='header__icon' />
  </IconButton>
</Link>
      */}
