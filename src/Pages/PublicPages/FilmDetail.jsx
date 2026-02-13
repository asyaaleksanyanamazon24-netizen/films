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
    console.log(films)


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Film not found</p>;

    return (
        <div>
            <h3>Film {film.title}</h3>
            <p>Film {film.description}</p>
        </div>
    );
};

export default FilmDetail;