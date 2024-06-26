import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/HomePage';
import About from '../views/About';
import Alternance from '../views/Alternance';
import Iut from '../views/IUT';
import Firstyear from '../views/BUT1ereannee';
import Secondyear from '../views/BUT2emeannee';
import Thirdyear from '../views/BUT3emeannee';
import BeloteAcceuil from '../views/belote/Acceuil';
import BeloteRegles from '../views/belote/Regles';
import BeloteConfiguration from '../views/belote/Configuration';
import BeloteGame from '../views/belote/Game';
import AddPoint from '../components/belote/AddPoint';
import BUTCultureGenerale from '../views/BUTCultureGenerale';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/me" element={<About />} />
                <Route path="/me/alternance" element={<Alternance />} />
                <Route path="/me/IUT" element={<Iut />} />
                <Route path="/me/IUT/premiereannee" element={<Firstyear />} />
                <Route path="/me/IUT/deuxiemeannee" element={<Secondyear />} />
                <Route path="/me/IUT/troisiemeannee" element={<Thirdyear />} />
                <Route path="/me/IUT/culturegenerale" element={<BUTCultureGenerale />} />
                <Route path="/belote" element={<BeloteAcceuil />} />
                <Route path="/belote/regles" element={<BeloteRegles />} />
                <Route path="/belote/configuration" element={<BeloteConfiguration />} />
                <Route path="/belote/game" element={<BeloteGame />} />
                <Route path="/belote/addpoint" element={<AddPoint />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;