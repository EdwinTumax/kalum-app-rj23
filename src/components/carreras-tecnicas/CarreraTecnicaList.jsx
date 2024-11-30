import { CarreraTecnicaRow } from "./CarreraTecnicaRow"
import { useCarreraTecnica } from "../../hooks/useCarreraTecnica";
import { CrearSolicitudAspiranteModalForm } from '../aspirantes/CrearSolicitudAspiranteModalForm';
import { useSelector } from "react-redux";

export const CarreraTecnicaList = () => {

    const {visibleFormSolicitud} = useSelector(state => state.aspirantes);

    const { carrerasTecnicas } = useCarreraTecnica();

    return (
        <>
            {!visibleFormSolicitud || <CrearSolicitudAspiranteModalForm />}
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Carrera Técnica</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carrerasTecnicas.map(({ carreraId, carreraTecnica }, index) => (
                            <CarreraTecnicaRow index={++index} key={carreraId} carreraId={carreraId} carreraTecnica={carreraTecnica} />
                        ))
                    }
                </tbody>
            </table>
        </>

    )
}