import { NavLink } from "react-router-dom"
import { useAuth } from "../../auth/hooks/useAuth";


export const Navbar = () => {

    const {login, handlerLogout} = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Kalum app</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/carreras-tecnicas">
                                Carreras Técnicas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/jornadas">
                                Jornadas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/examenes-admision">
                                Examenes de admisión
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogout">
                    <span  className="nav-item nav-link text-primary mx-3">
                        {login.user.apellidos} {login.user.nombres}
                    </span>
                    <button className="btn btn-outline-success" onClick={handlerLogout}>
                        Logout
                    </button>
                </div>

            </div>
        </nav>
    )
}