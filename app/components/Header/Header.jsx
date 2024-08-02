import React, { useEffect } from 'react';
import './Header.css';
import $ from 'jquery';

const Header = () => {
  const [drowpdown, setDropdown] = React.useState(false);

  useEffect(() => {
    $(".far fa-comment-dots").dblclick(function() {
      $(".notification-bubble").show(400);
    });

    $(document).on("scroll", function() {
      if ($(document).scrollTop() > 50) {
        $(".navigation").addClass("shrink");
      } else {
        $(".navigation").removeClass("shrink");
      }
    });
  }, []);

  const toggleDropdown = () => {
    setDropdown(!drowpdown);
  }

  return (
    <div className="navigation">
      <div className="navigation-left">
      <div className="logo">
          <a className="no-underline" href="#">
            <span className="logo-my">my</span><span className="logo-learning">learning</span>
          </a>
        </div>
        <div className="navigation-search-container">
          <i className="fa fa-search"></i>
          <input className="search-field" type="text" placeholder="Search" />
        </div>
      </div>


      
      <div className="navigation-icons">
        <a href="#" target="_blank" className="navigation-link" rel="noreferrer">
          <i className="fas fa-home"></i>
        </a>
        <a className="navigation-link notifica">
          <i className="far fa-comment-dots">
            <div className="notification-bubble-wrapper">
              <div className="notification-bubble">
                <span className="notification-count">27</span>
              </div>
            </div>
          </i>
        </a>
        <a href="#" className="navigation-link">
          <i className="far fa-bell"></i>
        </a>
        
        <a href="#" id="signout" className="navigation-link">
          <i className="far fa-heart"></i>
        </a>
        <a href="#" className="navigation-link">
          <i className="far fa-folder"></i>
        </a>
      </div>
      <div className='profile-dropwdown'>
          <img
            src="https://st2.depositphotos.com/1054749/6808/i/450/depositphotos_68088663-stock-photo-portrait-of-a-young-african.jpg"
            alt="Profile"
            className="profile-picture"
            onClick={toggleDropdown}
            />
          {drowpdown && (
            <div className='dropdown-menu'>
              <a href="#">Settings</a>
              <a href="#">Profile</a>
              <a href="#">Logout</a>
            </div>
          )}
        </div>
    </div>
  );
};

export default Header;
