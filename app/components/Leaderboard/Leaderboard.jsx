import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ data }) => (
  <div className="leaderboard-container">
    <h2 className="leaderboard-title">Leaderboard</h2>
    <ul className="leaderboard-list">
      {data.map((user, index) => (
        <li className="leaderboard-item" key={user.username}>
          <div className="leaderboard-item-left">
            <img
              className="leaderboard-profile-pic"
              src={user.profilePic}
              alt={`${user.username}'s profile`}
            />
            <div>
              <span className="leaderboard-rank">{index + 1}</span>
              <span className="leaderboard-username">{user.username}</span>
              <span className="leaderboard-last-online">{user.lastOnline}</span>
            </div>
          </div>
          <div className="leaderboard-item-right">
            <span className="leaderboard-points">{user.points} pts</span>
            <button className="leaderboard-message-button">Message</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Leaderboard;
