import React, {useState} from 'react'
import Contact from './Contact'
import MapFooter from './MapFooter'
import {useLanguage} from "../../Context/LanguageContext.jsx";

const Footer = () => {
    const [count, setCount] = useState(0);
    const { t } = useLanguage();
    return (
        <div className="text-xs">
            <h1 className='text-lg font-bold text-white'>{t("contact_us")}</h1>
            <div className='flex flex-row gap-4 p-8 h-64'>
                <div className="w-1/2 h-full">
                    <Contact/>
                </div>
                <div className="w-1/2 h-full">
                    <iframe
                        title="Yerevan Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.883546865118!2d44.51880169632796!3d40.191996408295765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd20f0977ad9%3A0x7f2158e0bb6e6dd7!2sMatenadaran!5e0!3m2!1sen!2sam!4v1770231524250!5m2!1sen!2sam"
                        className="w-full h-full rounded-lg border-2 border-orange-500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
            <hr/>
            <div className='flex flex-row justify-around py-2'>
                <p>© 2026 Your Company. All rights reserved.</p>
                <p>Made by MySelf</p>
            </div>
        </div>
    );
};

export default Footer;