import React from 'react'
import {useLanguage} from "../../Context/LanguageContext.jsx";

const Contact = () => {
    const {t} = useLanguage();
    return (
        <div className='flex flex-col gap-2 border border-orange-500 text-white text-start p-2 text-xs h-full'>
            <h2 className='text-sm font-bold'>{t("address")}</h2>
            <p>123 Main St, Anytown, USA</p>
            <h2 className='text-sm font-bold'>{t("phone")}</h2>
            <p>+1 (234) 567-8900</p>
            <h2 className='text-sm font-bold'>{t("hours")}</h2>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <hr />
            <h2 className='text-sm font-bold'>{t("director")}</h2>
            <p>John Doe, +1 (234) 567-8900, info@example.com</p>
            <h2 className='text-sm font-bold'>{t("art_director")}</h2>
            <p>Jane Doe, +1 (234) 567-8900, info@example.com</p>
        </div>
    )
}

export default Contact