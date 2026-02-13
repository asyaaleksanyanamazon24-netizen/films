import React, {useEffect} from 'react';
import HomeSlider from "../../Components/UI/HomeSlider.jsx";
import DescriptionFilm from './DescriptionFilm.jsx';
import {useDispatch, useSelector} from "react-redux";
import {fetchFilm} from "../../Redux/Slices/FilmSlice.js";

const Home = () => {
    const { films, loading, error } = useSelector((state) => state.film);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilm())
    }, [dispatch]);

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div className='flex flex-col gap-4'>
            <HomeSlider />
            <div className='p-16 grid gap-6 '>
            {
                films?.map((film, index) => (
                    <DescriptionFilm  key={index} id={film.id} title={film.title} description={film.description} image={film.image} />
                ))
            }
            </div>
        </div>
    );
};

export default Home;