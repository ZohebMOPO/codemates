import React, { useEffect, useState } from 'react'
import Cards from './components/cards';
import Options from './components/options';
import axios from "axios";
import constants from './api/constants';

function Wrapper() {
    const [matchedProfiles, setMatchedProfiles] = useState([]);
    const [profile, setProfile] = useState(undefined);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        axios.get(`${constants.API_HOST}/api/match`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(result => {
            const users = result.data.users;
            setMatchedProfiles(users);
            setIndex(0);
        }).catch(err => {
            throw err;
        });
    }, []);

    useEffect(() => {
        if (matchedProfiles.length === 0) return;
        setProfile(matchedProfiles[index]);
    }, [index, matchedProfiles]);
    return (
        <div>
            <div>
              <Cards
                name={profile ? profile.username : "USERNAME"}
                profession={profile ? profile.skill : "BEGINNER"}
                img="https://en.gravatar.com/userimage/42992842/b8e8ff24d6f1cb84bbe5c839903086bb.png?size=200"
              />
            </div>
            <Options incrementUser={() => setIndex(index + 1 > matchedProfiles.length - 1 ? matchedProfiles.length - 1 : index + 1)} decrementUser={() => setIndex(index - 1 < 0 ? 0 : index - 1)} />
        </div>
    )
}

export default Wrapper
