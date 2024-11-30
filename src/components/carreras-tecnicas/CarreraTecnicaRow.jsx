import { useAspirante } from "../../hooks/useAspirante";
import { useCarreraTecnica } from "../../hooks/useCarreraTecnica";

export const CarreraTecnicaRow = ({carreraId,carreraTecnica,index}) => {

    const {handlerRemoveCarreraTecnica,handlerCarreraTecnicaSelectedForm} = useCarreraTecnica();

    const {handlerOpenForm} = useAspirante();    

    return (
        <tr>
            <td>{index}</td>
            <td>{carreraTecnica}</td>
            <td><button onClick = {() => handlerCarreraTecnicaSelectedForm({carreraId,carreraTecnica})} className="btn btn-primary btn-sm">Update</button></td>
            <td><button onClick={() => handlerRemoveCarreraTecnica(carreraId)} className="btn btn-danger btn-sm">Eliminar</button></td>
            <td><button onClick={() => handlerOpenForm()} className="btn btn-success btn-sm">Asignar</button></td>
        </tr>
    )
}