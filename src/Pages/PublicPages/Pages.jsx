import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { admin_routes, public_routes } from "../../Utils/Routes.jsx";

const Pages = () => {
    const [code, setCode] = useState([]);
    const [isAdmin, setIsAdmin] = useState(()=>{
        return JSON.parse(localStorage.getItem('isAdmin')) || false
    });

    useEffect(() => {
        const handleKeyDown = (e) => {
            setCode(prev => {
                const updated = [...prev, e.key];

                if (updated.length > 4) {
                    updated.shift();
                }

                return updated;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        const secret = ['1', '2', '3', '4'];

        if (code.length === secret.length) {
            const match = secret.every((key, i) => key === code[i]);
            if (match) {
                setIsAdmin(true);
                localStorage.setItem('isAdmin', JSON.stringify(true));
                window.location.reload()

            }
        }
    }, [code]);




    return (
        <div className='p-8'>
            {useRoutes(isAdmin ? admin_routes : public_routes)}
        </div>
    );
};

export default Pages;
