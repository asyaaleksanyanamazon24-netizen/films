import React, {memo, useEffect} from 'react'

const MapFooter = () => {


    return (
        <iframe
            title="Yerevan Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.883546865118!2d44.51880169632796!3d40.191996408295765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd20f0977ad9%3A0x7f2158e0bb6e6dd7!2sMatenadaran!5e0!3m2!1sen!2sam!4v1770231524250!5m2!1sen!2sam"
            className="w-full h-full rounded-lg border-2 border-orange-500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    );
}

export default memo(MapFooter)