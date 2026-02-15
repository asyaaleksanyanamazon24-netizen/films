import React, {useEffect, useState} from 'react';
import MenuDetail from './MenuDetail.jsx';
import Button from '../../Components/UI/Button.jsx';
import {useDispatch, useSelector} from "react-redux";
import {fetchMenu} from "../../Redux/Slices/MenuSlice.js";
import {useLanguage} from "../../Context/LanguageContext.jsx";

const Menu = () => {
    const dispatch = useDispatch()
    const {menu, loading, error} = useSelector((state) => state.menu)
    const {t} = useLanguage();
    //
    // function f() {
    //     window.scrollTo(0, 0)
    // }

    useEffect(() => {
        dispatch(fetchMenu())
    }, [dispatch]);

    if (loading) return <p>{t("loading")}</p>
    if (error) return <p>{t("error")}</p>

    return (
        <div>
            <h1>{t("menu_available")}</h1>
            <div className='grid grid-cols-2 gap-6'>
                {
                    menu.map((el, index) => (
                        <MenuDetail

                            key={index} name={el.name} weight={el.weight} description={el.description}
                                    price={el.price} image={el.image}/>
                    ))
                }

            </div>
            <Button text={t("see_more")}/>

        </div>
    );
};

export default Menu;