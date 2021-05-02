import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
    return (
      <section>
        <div class="container">
          <div class="left"></div>
          <div class="right">
            <div class="content">
              <h1>Codemates</h1>
              <p>The ultimate platform for finding codemates!</p>
              <Link to="/login">Log In</Link>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Home
