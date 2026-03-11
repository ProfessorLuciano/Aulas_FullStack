import { useContext } from 'react'
import { AutenticadoContexto } from '../Contexts/AuthContexts'

export default function Inicio() {

    const { verificaToken } = useContext(AutenticadoContexto)
    verificaToken()
    
    return (
        <>
            <div>
                <h1>Início</h1>
            </div>
        </>
    )
}