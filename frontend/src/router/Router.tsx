import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/HomePage';
import Tennis from '../views/Tennis';
import About from '../views/About';
import TennisAfterwork from '../views/TennisAfterwork';
import Alternance from '../views/Alternance';
import IUT from '../views/IUT';
import FIRSTYEAR from '../views/BUT1ereannee';
import SECONDYEAR from '../views/BUT2emeannee';
import THIRDYEAR from '../views/BUT3emeannee';
import BUTCULTUREGENERALE from '../views/BUTCultureGenerale';

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/me" element={<About />} />
                <Route path="/me/alternance" element={<Alternance />} />
                <Route path="/me/IUT" element={<IUT />} />
                <Route path="/me/IUT/premiereannee" element={<FIRSTYEAR />} />
                <Route path="/me/IUT/deuxiemeannee" element={<SECONDYEAR />} />
                <Route path="/me/IUT/troisiemeannee" element={<THIRDYEAR />} />
                <Route path="/me/IUT/culturegenerale" element={<BUTCULTUREGENERALE />} />
                <Route path="/tennis" element={<Tennis />} />
                <Route path="/tennis/afterwork" element={<TennisAfterwork />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;