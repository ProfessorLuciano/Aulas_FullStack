import { Link } from 'react-router-dom'

import './cabecalhoN.estilo.scss'
export default function CabecalhoN() {
    return (
        <>
            <div className='conteinerCabecalhoGeral'>
                <Link to='/'>Início</Link>
                <Link to='#'>Quem Somos</Link>
                <Link to='#'>Produtos</Link>
                <Link to='#'>Contatos</Link>
                <Link to='/Login'>Login</Link>

            </div>
        </>
    )
}