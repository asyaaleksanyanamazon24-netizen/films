import React from 'react';
import {useLanguage} from "../../Context/LanguageContext.jsx";

const LangSwitcher = () => {
    const {lang, setLang} = useLanguage()

    return (
        <div>
            {/*<button disabled={lang === 'en'} onClick={() => setLang('en')}>*/}
            {/*    EN*/}
            {/*</button>*/}
            {/*<button disabled={lang === 'hy'} onClick={() => setLang('hy')}>*/}
            {/*    HY*/}
            {/*</button>*/}

            <select  onChange={(e) => setLang(e.target.value)}>
                <option className='text-black' value="en">EN</option>
                <option className="text-black" value="hy">HY</option>
            </select>
        </div>
    );
};

export default LangSwitcher;