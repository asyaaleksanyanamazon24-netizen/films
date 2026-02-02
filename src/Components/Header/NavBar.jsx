import React from 'react';
import {public_routes} from "../../Utils/Routes.jsx";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="flex justify-center gap-2 items-center">
            {
              public_routes
                  .filter(route => route.name)
                  .map((route, index) => (
                  <li key={index}>
                      <Link to={route.path}>{route.name}</Link>
                  </li>
              ))
            }
        </ul>
    );
};

export default NavBar;