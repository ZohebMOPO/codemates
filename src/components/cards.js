import React from 'react';
import './cards.css'

function Card(props) {
    return (
      <aside class="profile-card">
   <div class="mask-shadow"></div>
   <header>
     <a href="https://tutsplus.com">
       <img src={props.img} />
     </a>
     <h1>{props.name}</h1>
     <h2>{props.profession}</h2>
   </header>

   <div class="profile-bio">
     <p>{props.bio}"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
   </div>

   <ul class="profile-social-links">
     <li>
       <a href="#">
         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
       </a>
     </li>
     <li>
       <a href="#">
         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg" />
       </a>
     </li>
     <li>
       <a href="#">
         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg" />
       </a>
     </li>
   </ul>
 </aside>
    )
}

export default Card

{/*<img className="image" src={Image} alt=''/>*/}
