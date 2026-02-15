import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilm} from "../../Redux/Slices/FilmSlice.js";

const FilmDetail = () => {
    const {filmId} = useParams();
    const {films, loading, error} = useSelector(state => state.film)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchFilm(filmId))
    }, [dispatch, filmId]);
    
    const film = films[0]

    if (loading) return <div className="text-white text-center mt-10">Loading...</div>;
    if (error || !film) return <div className="text-white text-center mt-10">Film not found</div>;

    return (
        <div className="p-8 flex justify-center">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto">
                    <img 
                        src={film.image} 
                        alt={film.title} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{film.title}</h1>
                    <div className="w-16 h-1 bg-orange-500 mb-6"></div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {film.description}
                    </p>
                    <button className="mt-8 bg-orange-500 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors self-start">
                        Watch Trailer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilmDetail;