import { useSelector } from "react-redux";
import { useAspirante } from "../../hooks/useAspirante"

export const AspiranteForm = () => {

    const {carrerasTecnicas} = useSelector(state => state.carrerasTecnicas);

    const {handlerCloseForm} = useAspirante();

    return (
        <form>
            <input className="form-control my-3 w-75" placeholder="Apellidos" name="apellidos" />
            <input className="form-control my-3 w-75" placeholder="Nombres" name="nombres" />
            <input className="form-control my-3 w-75" placeholder="Direccion" name="Direccion" />
            <input className="form-control my-3 w-75" placeholder="Telefono" name="Telefono" />
            <input className="form-control my-3 w-75" placeholder="Email" name="email" />
            <select className="form-control my-3 w-75" name="listCarrerasTecnicas">
                <option value="0">SELECCIONAR CARRERA TÉCNICA</option>
                {
                    carrerasTecnicas.map((elemento) => {
                        return (
                            <option value={elemento.carreraId} key={elemento.carreraId}>
                                {elemento.carreraTecnica}
                            </option>
                        )
                    })
                }
            </select>
            <select className="form-control my-3 w-75" name="listJornadas">
                <option value="0">SELECCIONAR JORNADA</option>
            </select>
            <select className="form-control my-3 w-75" name="listExamenesAdmision">
                <option value="0">SELECCIONAR FECHA EXAMEN</option>
            </select>
            <button className="btn btn-primary" type="submit">Enviar</button>
            <button className="btn btn-primary mx-3" onClick={ ()=> handlerCloseForm()} type="button">Cancelar</button>
        </form>
    )
}