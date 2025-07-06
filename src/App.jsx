import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import GlobalStyle from '../public/assets/styles/GlobalStyle'

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <AppRoutes />
            </Router>
        </>
    )
}

export default App