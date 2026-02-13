import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux/store.js";
import {LanguageProvider} from "./Context/LanguageContext.jsx";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <LanguageProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </LanguageProvider>
    </Provider>
)
