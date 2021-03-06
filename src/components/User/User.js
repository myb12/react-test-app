// import React, { useEffect } from 'react'
import { useEffect, useState } from 'react';
import { getStorageItem, setStorageItem } from '../../utilities/Storage';
import Button from '../Button/Button';
import './User.css';

const User = ({ user }) => {
    const [userOnStorage, setUserOnStorage] = useState(false);
    const { id, name, email } = user;
    const companyName = user.company.name;
    const { city } = user.address;

    useEffect(() => {
        const specificUser = JSON.parse(getStorageItem(user.name));
        
        if (id === specificUser?.id) {
            setUserOnStorage(true);
        }

    }, [id, setUserOnStorage, user.id, user.name]);

    const addToStorage = (id) => {
        const userObj = {};
        const isExist = getStorageItem(user.name);
        if (isExist) {
            const specificUser = JSON.parse(getStorageItem(user.name));
            if (id === specificUser.id) {
                const count = +specificUser.quantity;
                const newCount = count + 1;
                userObj.id = id;
                userObj.quantity = newCount;
                setStorageItem(user.name, JSON.stringify(userObj));
                setUserOnStorage(true);
            }
        } else {
            userObj.id = id;
            userObj.quantity = 1;
            setStorageItem(user.name, JSON.stringify(userObj));
            setUserOnStorage(true);
        }
    }

    const removeFromStorage = (id) => {
        if (user.id === id) localStorage.removeItem(user.name);
        setUserOnStorage(false);
    }
    return (
        <div className="card">
            <div className="user-img">
                <img src={`https://robohash.org/${id}FG.png?set=set5&size=150x150`} alt="" />
            </div>
            <hr className="divider" />
            <h3>{name}</h3>
            <h4>Work at: {companyName}</h4>
            <h5>Address: {city}</h5>
            <h6>Email: {email}</h6>
            <div className="buttons">
                <Button text="Add User" btnSm="btn-sm" handleAdd={() => addToStorage(id)} />
                {
                    userOnStorage ? <Button text="Remove User" btnSm="btn-sm" handleRemove={() => removeFromStorage(id)} /> : ''
                }
            </div>
        </div>
    )
}

export default User
