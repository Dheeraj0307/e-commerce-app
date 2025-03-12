
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({ children }) => {
    const token = JSON.parse(localStorage.getItem('token'))
    return token ? <Navigate to={'/'} /> : <>{children}</>
}

export default ProtectRoute 