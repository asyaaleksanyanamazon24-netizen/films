import React from 'react';
import { useDispatch } from 'react-redux';

const FilmControl = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilm);
    }, [dispatch])

    return (
        <div>
            FilmControl
        </div>
    );
};

export default FilmControl;