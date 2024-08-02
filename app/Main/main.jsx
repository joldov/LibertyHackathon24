import React from 'react';
import './main.css';
import UserCard from '../components/leftcolumn';
import Leaderboard from '../components/Leaderboard/Leaderboard';
import Post from '../components/middlecolumn/middlecolumn';

// Sample data for the leaderboard
const leaderboardData = [
    {
        username: 'User1',
        points: 150,
        profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
        lastOnline: '5 minutes ago',
    },
    {
        username: 'User2',
        points: 120,
        profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
        lastOnline: '10 minutes ago',
    },
    {
        username: 'User3',
        points: 100,
        profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
        lastOnline: '30 minutes ago',
    },
    {
        username: 'User4',
        points: 90,
        profilePic: 'https://randomuser.me/api/portraits/women/4.jpg',
        lastOnline: '1 hour ago',
    },
    {
        username: 'User5',
        points: 80,
        profilePic: 'https://randomuser.me/api/portraits/men/5.jpg',
        lastOnline: '2 hours ago',
    },
];

export default function Main() {
    return (
        <div className="container">

            <UserCard />
            <Post />
            <Leaderboard data={leaderboardData} />

        </div>
    );
}
