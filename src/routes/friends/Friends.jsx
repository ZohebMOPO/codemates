import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import constants from '../../api/constants';

export default function Friends() {
	const [friends, setFriends] = useState([]);
	const [redirect, setRedirect] = useState(false);
	useEffect(() => {
		if (!localStorage.getItem("token")) {
			setRedirect(true);
			return;
		}
		axios.get(`${constants.API_HOST}/api/match/friends`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		}).then(result => {
			setFriends(result.data.friends);
		}).catch(err => {
			setRedirect(true);
		});
	}, []);

	if (redirect) {
		return <Redirect to="/login" />
	}
	return (
		<div class="container" style={{
			height: "100%",
			padding: "10px",
			display: "flex",
			flexDirection: "column"
		}}>
			<ul class="friends" style={{
				width: "100%",
				listStyle: "none"
			}}>
				{
					friends.map(friend => <li style={{
						padding: "30px",
						margin: "10px",
						border: "2px solid black",
						backgroundColor: "#FAFAFA",
						width: "100%",
						textAlign: "left",
						boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.1)"
					}}>
						<p><strong>Username: {friend.username}</strong></p>
						{friend.github && friend.github.length > 0 ? <h1>Github: {friend.github}</h1> : ""}
						{friend.twitter && friend.github.length > 0 ? <h1>Twitter: {friend.twitter}</h1> : ""}
						{friend.linkedIn && friend.github.length > 0 ? <h1>LinkedIn: {friend.linkedIn}</h1> : ""}
						{friend.facebook && friend.github.length > 0 ? <h1>Facebook: {friend.facebook}</h1> : ""}
						{friend.discord && friend.github.length > 0 ? <h1>Discord: {friend.discord}</h1> : ""}
					</li>)
				}
			</ul>
			<Link style={{
				color: "black", 
				backgroundColor: "#FAFAFA", 
				padding: 20, 
				border: "2px solid black",
				textDecoration: "underline",
				fontFamily: "sans-serif"
			}} to="/app">Back to matching screen</Link>
		</div>
	)
}