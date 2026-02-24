import NAutenticados from './nAutenticados.routes'
import Autenticados from './autenticados.routes'

export default function Rotas() {
    const autenticado = false
    return (
        autenticado === true ? <Autenticados /> : <NAutenticados />
    )
}