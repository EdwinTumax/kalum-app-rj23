import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { AppKalumRoutes } from "./routes/AppKalumRoutes";
import { LoginPage } from "./auth/pages/LoginPage";

export const AppRoutes = () => {

    const {isAuth} = useSelector(state => state.auth);

    return (
        <Routes>
            {
                isAuth ? (
                    <Route path='/*' element={<AppKalumRoutes />} />
                )
                : 
                <>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/*' element={<Navigate to='/login' />} />
                </>
            }
        </Routes>
    );
}