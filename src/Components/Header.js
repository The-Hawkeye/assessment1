import "./Header.css"

import heart from "../assets/heart.png";
import profile from "../assets/profile.png";
import searchIcon from "../assets/search-normal.png";
import shoppingBag from "../assets/shopping-bag.png";
import arrow from "../assets/arrow-left.png";
import logo from "../assets/Logo.png";



const Header = ()=>{
    return(
        <div >
            <div className="row-1" style={{padding:"0px 96px 0px 96px"}}>
                <img src ={logo} alt="logo-img"/>
                <h1 className="header-title">LOGO</h1>
                <div className="icons">
                    <img src={heart} alt="heartIcon"/>
                    <img src = {searchIcon} alt="search-icon"/>
                    <img src = {profile} alt="profile-icon"/>
                    <img src = {shoppingBag} alt = "shopping-icon"/>
                    <span id="username">ENG</span>
                    <img src = {arrow} alt = "arrow-icon"/>
                </div>
            </div>
            <div style={{padding:"0px 96px 0px 96px", display:"flex", alignItems:"center",justifyContent:"center"}}>
                <ul id="menu">
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT US</li>
                    <li><a href="/contact" target="_blank">CONTACT US</a></li>
                </ul>
            </div>
            <hr/>
        </div>
    )
};


export default Header;
