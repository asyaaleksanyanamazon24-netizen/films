import React from 'react'
import {Link} from "react-router-dom";

const DescriptionFilm = ({id, title, description, image }) => {


    return (
        <Link to={`/films/${id}`}

            className="flex gap-4 border-2 border-orange-500 p-2 w-full h-[15vh]">

            {/* 30% TEXT SIDE */}
            <div className="w-[30%]">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
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