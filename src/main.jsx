import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router';
import RootLayout from "./Components/RootLayout.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<RootLayout/>}>
                   <Route index element={<App/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
