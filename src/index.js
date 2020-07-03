import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Avatar} from './Avatar';
import {Message} from './Message';
import {Author} from './Message';


function Tweet(){
  return(
    <div className="tweet">
      <Avatar/>
      <div className="content">
        <Author/>
        <Message/>
        
      </div>
    </div>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <Tweet />
  </React.StrictMode>,
  document.getElementById('root')
);


