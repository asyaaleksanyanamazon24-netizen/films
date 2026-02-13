import React from 'react';
import Logo from "./Logo.jsx";
import NavBar from "./NavBar.jsx";
import LangSwitcher from "./LangSwitcher.jsx";

const Header = () => {
    return (
        <div className="w-full h-[8vh] bg-[#210E09] flex justify-around  text-white items-center text-sm">
            <Logo />
            <NavBar />
            <LangSwitcher />
        </div>
    );
};

export default Header;