import React, { useContext } from 'react'
import { AutenticadoContexto } from '../Contexts/AuthContexts'

import NAutenticados from './nAutenticados.routes'
import Autenticados from './autenticados.routes'

export default function Rotas() {
    const { autenticado } = useContext(AutenticadoContexto)    
    return (
        autenticado === true ? <Autenticados /> : <NAutenticados />
    )
}