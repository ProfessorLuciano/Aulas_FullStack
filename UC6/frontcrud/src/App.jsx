import Rotas from './Routes'
import AuthProvider from './Contexts/AuthContexts'

export default function App() {
  return (
    <AuthProvider>
      <>
        <div>
          <Rotas />
        </div>
      </>
    </AuthProvider>
  )
}
