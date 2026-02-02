import Home from "../Pages/PublicPages/Home.jsx";
import News from "../Pages/PublicPages/News.jsx";
import Gallery from "../Pages/PublicPages/Gallery.jsx";
import Menu from "../Pages/PublicPages/Menu.jsx";
import { Navigate } from "react-router-dom";

export const HOME_PAGE = '/';
export const NEWS_PAGE = '/news';
export const GALLERY_PAGE = '/gallery';
export const MENU_PAGE = '/menu';

export const public_routes = [
    {path: HOME_PAGE, element: <Home />, name: 'Home'},
    {path: NEWS_PAGE, element: <News />, name: 'News'},
    {path: GALLERY_PAGE, element: <Gallery />, name: 'Gallery'},
    {path: MENU_PAGE, element: <Menu />, name: 'Menu'},
    {path: '*', element: <Navigate to={HOME_PAGE}/>},
]