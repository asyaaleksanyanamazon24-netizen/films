import Home from "../Pages/PublicPages/Home.jsx";
import News from "../Pages/PublicPages/News.jsx";
import Gallery from "../Pages/PublicPages/Gallery.jsx";
import Menu from "../Pages/PublicPages/Menu.jsx";
import FilmDetail from "../Pages/PublicPages/FilmDetail.jsx";
import { Navigate } from "react-router-dom";
import Dashboard from "../Pages/AdminPage/Dashboard.jsx";
import MenuControl from "../Pages/AdminPage/MenuControl.jsx";
import FilmControl from "../Pages/AdminPage/FilmControl.jsx";

export const HOME_PAGE = '/';
export const NEWS_PAGE = '/news';
export const GALLERY_PAGE = '/gallery';
export const MENU_PAGE = '/menu';


export const ADMIN_PAGE = '/admin';
export const MENU_CONTROL_PAGE = '/admin/menu-control';
export const FILM_CONTROL_PAGE = '/admin/film-control';

export const public_routes = [
    { path: HOME_PAGE, element: <Home />, name: 'Home' },
    { path: "/films/:filmId", element: <FilmDetail /> },
    { path: NEWS_PAGE, element: <News />, name: 'News' },
    { path: GALLERY_PAGE, element: <Gallery />, name: 'Gallery' },
    { path: MENU_PAGE, element: <Menu />, name: 'Menu' },
    { path: '*', element: <Navigate to={HOME_PAGE} /> },
]


export const admin_routes = [
    { path: ADMIN_PAGE, element: <Dashboard />, name: "Dashboard" },
    { path: MENU_CONTROL_PAGE, element: <MenuControl />, name: "MenuControl" },
    { path: FILM_CONTROL_PAGE, element: <FilmControl />, name: "FilmControl" },
    { path: "*", element: <Navigate to={ADMIN_PAGE} /> }
]