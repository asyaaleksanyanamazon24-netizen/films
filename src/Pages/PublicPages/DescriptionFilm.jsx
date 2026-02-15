import React from 'react'
import {Link} from "react-router-dom";

const DescriptionFilm = ({id, title, description, image }) => {


    return (
        <Link to={`/films/${id}`}
            className="flex gap-4 border-2 border-orange-500 bg-white p-4 w-full h-[20vh] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">

            {/* 30% TEXT SIDE */}
            <div className="w-[30%] flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
            </div>

            {/* 70% IMAGE SIDE */}
            <div className="w-[70%] h-full">
                <img
                    className="w-full h-full object-cover rounded-md"
                    src={image}
                    alt={title}
                />
            </div>

        </Link>
    );

}

export default DescriptionFilm