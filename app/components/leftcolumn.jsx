import React, { useState } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
 

// Styled-components for styling
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #0D0734;
    font-family: Montserrat, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
  }
`;

const CardContainer = styled.div`
  // background-color: #231E39;
  border-radius: 5px;
  // box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
  color: #B3B8CD;
  padding-top: 30px;
  position: relative;
  width: 350px;
  max-width: 100%;
  text-align: center;
`;

const RoundImage = styled.img`
  border: 1px solid #03BFCB;
  padding: 7px;
  border-radius: 50%;
`;

const PrimaryButton = styled.button`
  background-color: #03BFCB;
  border: 1px solid #03BFCB;
  border-radius: 3px;
  color: #231E39;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  padding: 10px 25px;

  &.ghost {
    background-color: transparent;
    color: #02899C;
  }
`;

const SkillsContainer = styled.div`
  // background-color: #1F1A36;
  text-align: left;
  padding: 15px;
  margin-top: 30px;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    border: 1px solid #2D2747;
    border-radius: 2px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
    background-color: #2D2371;
  }
`;

const CommunitiesContainer = styled.div`
  // background-color: #1F1A36;
  text-align: left;
  padding: 15px;
  margin-top: 30px;
  border-radius: 5px;

  .community-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;
    }

    .comm-name {
      font-size: 14px;
    }
  }
`;

const UserCard = () => {
  const [dropdown, setDropdown] = useState(false);

  const userData = {
    following: 123,
    likes: 456,
    profileUrl: 'https://www.example.com/profile',
    skills: ['UI / UX', 'Front End Development', 'HTML', 'CSS', 'JavaScript', 'React', 'Node'],
    name: 'Ella Liberty',
    location: 'New York',
    description: 'User interface designer and front-end developer',
    community: [
      {
        name: 'Data@Liberty',
        photoUrl: 'https://static.vecteezy.com/system/resources/previews/025/218/454/original/round-yellow-icon-of-multiplication-symbol-on-dark-blue-background-basic-mathematical-symbol-business-finance-concept-in-vector.jpg',
      },
      {
        name: 'Investments@Liberty',
        photoUrl: 'https://i.pinimg.com/736x/78/5d/d4/785dd4631c1bcc23a9bc4c253531a688.jpg',
      },
    ],
  };

  const showMessageBox = () => {
    alert(`Following: ${userData.following}\nLikes: ${userData.likes}`);
  };

  const goToProfile = () => {
    window.location.href = userData.profileUrl;
  };

  return (
    <>
      <GlobalStyle />
      <CardContainer>
        <RoundImage
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="user"
        />
        <h3>{userData.name}</h3>
        <h6>{userData.location}</h6>
        <p>{userData.description}</p>
        <div className="buttons">
          <PrimaryButton onClick={showMessageBox}>Ranking</PrimaryButton>
          <PrimaryButton className="ghost" onClick={goToProfile}>Profile</PrimaryButton>
        </div>
        <SkillsContainer>
          <h6>Skills</h6>
          <ul>
            {userData.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </SkillsContainer>
        <CommunitiesContainer>
          <h6>Communities</h6>
          {userData.community.map((comm) => (
            <div key={comm.name} className="community-item">
              <img src={comm.photoUrl} alt="Community Photo" />
              <span className="comm-name">{comm.name}</span>
            </div>
          ))}
        </CommunitiesContainer>
      </CardContainer>
    </>
  );
};

export default UserCard;
