import React from 'react';
import './cards.css'

import GithubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DiscordIcon from '@material-ui/icons/Chat';

function Cards(props) {
  return (
    <aside class="profile-card">
      <div class="mask-shadow"></div>
      <header>
        <a href="https://tutsplus.com">
          <img src={props.img} />
        </a>
        <h1>{props.name}</h1>
      </header>
      <h2>Skill: {props.skill}</h2>
      <ul class="profile-social-links">
        <li>
          {props.github && props.github.length > 0 && <p><GithubIcon />{props.github}</p>}
          {props.twitter && props.twitter.length > 0 && <p><TwitterIcon />{props.twitter}</p>}
          {props.facebook && props.facebook.length > 0 && <p><FacebookIcon />{props.facebook}</p>}
          {props.linkedIn && props.linkedIn.length > 0 && <p><LinkedInIcon />{props.linkedIn}</p>}
          {props.discord && props.discord.length > 0 && <p><DiscordIcon />{props.discord}</p>}
        </li>
      </ul>
    </aside>

  )
}

export default Cards
