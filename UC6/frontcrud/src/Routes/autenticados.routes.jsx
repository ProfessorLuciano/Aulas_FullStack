import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CabecalhoA from '../CabecalhoA'
import Dashboard from '../Dashboard'
import CadastrarProdutos from '../CadastrarProdutos'
import VisualizarProdutos from '../VisualizarProdutos'

export default function Autenticados() {
    return (
        <BrowserRouter>
        <CabecalhoA />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/CadastrarProdutos' element={<CadastrarProdutos />} />
                <Route path='/VisualizarProdutos' element={<VisualizarProdutos />} />

                <Route path='*' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}