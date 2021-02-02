import { Avatar } from '@material-ui/core';
import React from 'react'
import './MessageSender.css';

function MessageSender() {

const handleSubmit = e => {
    e.preventDefault();
}

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input 
                    className="messageSender__input"
                    placeholder={"What's on your mind"} />
                    <input placeholder="image url (Optional)" />
                    <button OnClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">

            </div>
        </div>
    )
}

export default MessageSender;
