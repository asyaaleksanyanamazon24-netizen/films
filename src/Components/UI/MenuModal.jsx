import React from 'react';
import { FaRegWindowClose } from "react-icons/fa";

const MenuModal = ({ desc, close, name, price, image }) => {
    return (
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4' onClick={close}>
            <div 
                className="bg-white rounded-lg shadow-2xl p-6 max-w-lg w-full relative animate-fadeIn"
                onClick={(e) => e.stopPropagation()}
            >
                <FaRegWindowClose 
                    size={24} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-orange-500 cursor-pointer transition-colors"
                    onClick={close} 
                />
                
                {image && (
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-64 object-cover rounded-md mb-4 shadow-sm"
                    />
                )}

                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-lg">
                        {price} ֏
                    </span>
                </div>
                
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                    {desc}
                </p>
                
                <button 
                    className="w-full bg-orange-500 text-white py-2 rounded-md font-bold hover:bg-orange-600 transition-colors"
                    onClick={close}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default MenuModal;