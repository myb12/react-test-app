import React from 'react'
import './User.css';

const User = ({ name, company, address, email, id }) => {
    return (
        <div className="card">
            <div className="user-img">
                <img src={`https://robohash.org/${id}FG.png?set=set5&size=150x150`} alt="" />
            </div>
            <hr className="divider" />
            <h3>Name: {name}</h3>
            <h4>Work at: {company}</h4>
            <h5>Address: {address}</h5>
            <h6>Email: {email}</h6>
        </div>
    )
}

export default User
