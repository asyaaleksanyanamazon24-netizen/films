import React from 'react';
import { FaRegWindowClose } from "react-icons/fa";

const MenuModal = ({ desc, close, name, price }) => {
    return (
        <div className='fixed top-0 right-0 w-full h-screen  flex justify-center items-center text-xs'>
            <div className="border border-black px-2 py-4">
                <FaRegWindowClose size={20} onClick={(e) => close(e)} />
                <h3>{name}</h3>
                <br />
                {desc}
                <br />
                price: {price}
            </div>
        </div>
    );
};

export default MenuModal;