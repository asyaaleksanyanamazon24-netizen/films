import React from 'react'
import {useLanguage} from "../../Context/LanguageContext.jsx";

const Contact = () => {
    const {t} = useLanguage();
    return (
        <div className='flex flex-col justify-between gap-4 border border-orange-500 text-white text-start p-6 text-sm h-full rounded-lg bg-black/20'>
            <div>
                <h2 className='text-base font-bold text-orange-400 mb-1'>{t("address")}</h2>
                <p className="text-gray-300">123 Main St, Anytown, USA</p>
            </div>
            
            <div>
                <h2 className='text-base font-bold text-orange-400 mb-1'>{t("phone")}</h2>
                <p className="text-gray-300">+1 (234) 567-8900</p>
            </div>

            <div>
                <h2 className='text-base font-bold text-orange-400 mb-1'>{t("hours")}</h2>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>

            <hr className="border-gray-600 my-2" />

            <div>
                <h2 className='text-base font-bold text-orange-400 mb-1'>{t("director")}</h2>
                <p className="text-gray-300">John Doe, +1 (234) 567-8900, info@example.com</p>
            </div>

            <div>
                <h2 className='text-base font-bold text-orange-400 mb-1'>{t("art_director")}</h2>
                <p className="text-gray-300">Jane Doe, +1 (234) 567-8900, info@example.com</p>
            </div>
        </div>
    )
}

export default Contact