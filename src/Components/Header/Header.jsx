import React from 'react';
import Logo from "./Logo.jsx";
import NavBar from "./NavBar.jsx";

const Header = () => {
    return (
        <div className="w-full h-[10vh] bg-[#210E09] flex justify-around  text-white items-center">
            <Logo />
            <NavBar />
            <Logo />
        </div>
    );
};

export default Header;