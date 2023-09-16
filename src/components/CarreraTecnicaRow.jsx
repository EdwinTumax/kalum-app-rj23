export const CarreraTecnicaRow = ({codigo,nombre}) => {
    return (
        <tr>
            <td>{codigo}</td>
            <td>{nombre}</td>
            <td><button className="btn btn-primary btn-sm">Update</button></td>
            <td><button className="btn btn-danger btn-sm">Eliminar</button></td>
        </tr>
    )
}