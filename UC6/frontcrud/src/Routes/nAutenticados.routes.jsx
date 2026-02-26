import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CabecalhoN from '../CabecalhoN'
import Inicio from '../Inicio'
import Login from '../Login'

export default function NAutenticados() {
    return (
        <BrowserRouter>
            <CabecalhoN />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Login' element={<Login />} />


                <Route path='*' element={<Inicio />} />
            </Routes>
        </BrowserRouter>

    )
}