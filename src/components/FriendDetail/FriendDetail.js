import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const[friend,setFriend] = useState({})
    useEffect(()=>{
        const url = `http://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setFriend(data));
},[])
    return (
        <div>
         <p>This is components friend detail:{friendId}</p>
         <h2>Name:{friend.name}</h2>
         <p>Email:{friend.email}</p>
         <p>Phone:{friend.phone}</p>
         <p>website:{friend.website}</p>


        </div>
    );
};

export default FriendDetail;