import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/HomePage';
import Tennis from '../views/Tennis';
import About from '../views/About';
import TennisAfterwork from '../views/TennisAfterwork';
import { useState } from 'react';

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tennis" element={<Tennis />} />
                <Route path="/me" element={<About />} />
                <Route path="/tennis/afterwork" element={<TennisAfterwork />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;