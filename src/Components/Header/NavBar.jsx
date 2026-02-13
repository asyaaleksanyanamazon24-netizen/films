import React, {useMemo, useState} from 'react';
import {admin_routes, public_routes} from "../../Utils/Routes.jsx";
import {Link} from "react-router-dom";
import {useLanguage} from "../../Context/LanguageContext.jsx";

const NavBar = () => {
    const [count, setCount] = useState(0)
    const isAdmin = localStorage.getItem('isAdmin');
    const {t} = useLanguage();

    const menuItems = useMemo(() => {
        return isAdmin ? admin_routes.filter(route => route.name) : public_routes.filter(route => route.name)
    }, [isAdmin])

    return (
        <ul className="flex justify-center gap-4 items-center text-base">
            {
                   menuItems.map((route, index) => {
                            return (<li key={index}>
                                <Link to={route.path}>{t(route.name.toLowerCase())}</Link>
                            </li>)
                        })
            }


            {isAdmin && <button onClick={() => {
                localStorage.removeItem('isAdmin');
                window.location.reload()
            }}>
                {t('exit')}
            </button>}
        </ul>
    );
};

export default NavBar;