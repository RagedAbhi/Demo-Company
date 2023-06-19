import React from 'react'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navlist">
                <li id="logo">Demo Company</li>
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Pricing</li>
                <li id="yellow">Blog</li>
            </ul>
            <ul className="iconlist">
                <SettingsRoundedIcon style={{ color: "#757B8C" }} />
                <NotificationsIcon style={{ color: "#757B8C" }} />
                <img src={require('../assets/profileimg.png')} alt="" />
            </ul>
        </div>
    )
}

export default Navbar
