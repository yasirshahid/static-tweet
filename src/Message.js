import React from 'react';

export function Message(){
    return(
        <div className="message">
            This is less than 140 characters.
        </div>

    );
}

export function Author(){
    return(
        <span>
            <span className="name">Your Name</span>
            <span className="handle">@yourhandle</span>
        </span>
    );
}