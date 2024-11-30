import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { CarrerasTecnicasPage } from '../pages/CarrerasTecnicasPage';
import { JornadasPage } from '../pages/JornadasPage';

export const AppKalumRoutes = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="carreras-tecnicas" element={<CarrerasTecnicasPage/>}/>
                <Route path="jornadas" element={<JornadasPage/>}/>
                <Route path="/" element={<Navigate to="/carreras-tecnicas"/>}/>
            </Routes>
        </>
    )
}