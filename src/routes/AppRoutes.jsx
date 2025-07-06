import { Routes, Route } from 'react-router-dom'
// import HomePage from '../pages/HomePage'
// import ServicesPage from '../pages/ServicesPage'
// import ProjectsPage from '../pages/ProjectsPage'
// import ContactsPage from '../pages/ContactsPage'
import Layout from '../components/common/Layout'
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
// import NotFoundPage from '../pages/NotFoundPage'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                {/*<Route path="services" element={<ServicesPage />} />*/}
                <Route path="projects" element={<ProjectsPage />} />
                {/*<Route path="contacts" element={<ContactsPage />} />*/}
                {/*<Route path="*" element={<NotFoundPage />} />*/}
            </Route>
        </Routes>
    )
}

export default AppRoutes