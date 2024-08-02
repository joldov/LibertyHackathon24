'use client';

import React from 'react';
import './page.module.css';
import UserCard from './components/leftcolumn';


export default function Page() {
  return (
    <div className="container">
      <div className="column columnleft">
        <h2>Column 1</h2>
        <UserCard/>
      </div>
      <div className="column columnmid">
        
        <div className="rounded-box">
          <div className="row">
            <div className="profile" />
            <div className="text-box" />
          </div>
          <div className="row">
            <div className="profile2" />
            <div className="button" />
            <div className="button1" />
            <div className="button2" />
            <div className="button2" />
          </div>
        </div>
      </div>
      <div className="column columnright">
        <h2>Column 3</h2>
        <p> This is the third column.</p>
      </div>
    </div>
  );
}
