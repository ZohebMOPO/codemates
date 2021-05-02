import React from 'react';
import './cards.css'

function Cards(props) {
  const images = [
    {
      id: 1,
      src="https://en.gravatar.com/userimage/42992842/b8e8ff24d6f1cb84bbe5c839903086bb.png?size=200"
    }
    {
      id: 2,
      src="https://storage.googleapis.com/chydlx/codepen/minimalist-profile-card/user-img.jpg"
    }
    {
      id: 3,
      src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7d5363c18112a02ce22d0c46f8570147&auto=format&fit=crop&w=635&q=80%20635w"
    }
    {
      id: 4,
      src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ]
    return (
      <aside class="profile-card">
   <div class="mask-shadow"></div>
   <header>
     <a href="https://tutsplus.com">
       {images.map(image => {
          return <img key={image.id} src={image.src} alt="cannot show image" />
       })}
     </a>
     <h1>{props.name}</h1>
     <h2>{props.languages}</h2>
   </header>

   <div class="profile-bio">
     <p>{props.skill}"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
   </div>

    <ul class="profile-social-links">
      <li>
        <a href={props.email}>
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDIzMC4xNyAyMzAuMTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIzMC4xNyAyMzAuMTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0yMzAsNDkuNTg1YzAtMC4yNjMsMC4xODEtMC41MTksMC4xNjktMC43NzlsLTcwLjI0LDY3LjY4bDcwLjE1Niw2NS41MThjMC4wNDEtMC40NjgtMC4wODUtMC45NC0wLjA4NS0xLjQxOFY0OS41ODV6Ii8+DQoJPHBhdGggZD0iTTE0OS4yMDcsMTI2LjkwMWwtMjguNjc0LDI3LjU4OGMtMS40NTEsMS4zOTYtMy4zMjUsMi4wOTYtNS4yLDIuMDk2Yy0xLjgzNiwwLTMuNjcyLTAuNjctNS4xMTMtMi4wMTNsLTI4LjU5Ni0yNi42NDcNCgkJTDExLjAxLDE5NS45ODljMS43MTcsMC42MTcsMy41NiwxLjA5Niw1LjQ5LDEuMDk2aDE5Ny42NjdjMi44NjYsMCw1LjU1NC0wLjg3Myw3Ljg5MS0yLjE3NUwxNDkuMjA3LDEyNi45MDF6Ii8+DQoJPHBhdGggZD0iTTExNS4yNTEsMTM4Ljc1N0wyMjIuNDQ3LDM1LjQ5NmMtMi40MjctMS40NDMtNS4yNTItMi40MTEtOC4yOC0yLjQxMUgxNi41Yy0zLjk0MywwLTcuNTU2LDEuNTMxLTEwLjM3LDMuODY2DQoJCUwxMTUuMjUxLDEzOC43NTd6Ii8+DQoJPHBhdGggZD0iTTAsNTIuMXYxMjguNDg0YzAsMS40NzUsMC4zMzksMi44OTcsMC43MDcsNC4yNTZsNjkuNzM4LTY3LjE1NkwwLDUyLjF6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
        </a>
      </li>
    </ul>
</aside>

    )
}

export default Cards
