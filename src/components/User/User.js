import React, { useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from '../../utilities/Storage';
import Button from '../Button/Button';
import './User.css';

const User = ({ user }) => {
    const [userOnStorage, setUserOnStorage] = useState(false);
    const { id, name, email } = user;
    const companyName = user.company.name;
    const { city } = user.address;

    // setUserOnStorage(getStorageItem(user.name));
    // if (user.id === id) {
    //     const isExist = getStorageItem(user.name);
    //     if (isExist) {
    //         setUserOnStorage(true);
    //     }
    // }

    useEffect(() => {
        if (user.id === id) {
            const isExist = getStorageItem(user.name);
            setUserOnStorage(isExist);
        }
    }, [])

    const addToStorage = (id) => {
        if (user.id === id) {
            if (getStorageItem(user.name)) {
                const count = +getStorageItem(user.name);
                const newCount = count + 1;
                setStorageItem(user.name, newCount);
            } else {
                setStorageItem(user.name, 1);
            }
        }
    }

    const removeFromStorage = (id) => {
        if (user.id === id) localStorage.removeItem(user.name);
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
                <Button text="Add User" handleChange={() => addToStorage(id)} />
                {
                    userOnStorage ? <Button text="Remove User" btnSm="btn-sm" handleChange={() => removeFromStorage(id)} /> : ''
                }
            </div>
        </div>
    )
}

export default User
