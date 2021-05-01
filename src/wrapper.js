import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Cards from './components/cards';
import Options from './components/options';
import axios from "axios";

function Wrapper() {
  const [users, setUsers] = useState([]);

  let url = "http://localhost:8080/api/";

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/profile")

      setUsers(req.data);
    }

    fetchData();
  }, []);

  console.log(users);

  return (
        <div>
          <div className="CardDeck">
            {users && users.map( (user) => (
                   <Cards
                   key={user.id} name={user.username} />
               ))}
          </div>
          <Options />
        </div>
    )
}

export default Wrapper;
