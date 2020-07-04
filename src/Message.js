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
            <span className="name">Yasir Shahid</span>
            <span className="handle">@yasir</span>
        </span>
    );
}