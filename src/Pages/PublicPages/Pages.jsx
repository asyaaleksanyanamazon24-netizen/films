import React from 'react';
import {useRoutes} from 'react-router-dom';
import {public_routes} from "../../Utils/Routes.jsx";

const Pages = () => {
    return (
        <div>
            {
                useRoutes(public_routes)
            }
        </div>
    );
};

export default Pages;