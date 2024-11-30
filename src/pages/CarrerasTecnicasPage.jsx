import { useEffect} from "react";
import { CarreraTecnicaList } from "../components/carreras-tecnicas/CarreraTecnicaList"
import { CarreraTecnicaModalForm } from "../components/carreras-tecnicas/CarreraTecnicaModalForm";
import { useCarreraTecnica } from "../hooks/useCarreraTecnica";

export const CarrerasTecnicasPage = () => {

    const {getCarrerasTecnicas,visibleForm, handlerOpenForm} = useCarreraTecnica();

    useEffect(() => {
        getCarrerasTecnicas();
    },[]);

    return (
        <>
            {!visibleForm || <CarreraTecnicaModalForm/>}
            <div className="container my-4">
                <h2><span className="col-12 badge bg-success">Carreras técnicas</span></h2>
                <div className="row">
                    <div className="col">
                        {visibleForm || <button onClick={handlerOpenForm} className="btn btn-primary my-2">Nuevo carrera</button>}
                        <CarreraTecnicaList/>
                    </div>
                </div>
            </div>
        </>
    )
}