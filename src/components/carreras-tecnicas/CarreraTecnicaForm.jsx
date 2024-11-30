import { useState, useEffect } from "react"
import Swal from 'sweetalert2'
import { useCarreraTecnica } from "../../hooks/useCarreraTecnica";

export const CarreraTecnicaForm  = ({carreraTecnicaSelected,handlerCloseForm}) =>{

    const {
        initialCarreraTecnicaForm, 
        handlerAddCarreraTecnica, 
        handlerUpdateCarreraTecnica
    } = useCarreraTecnica();

    const [carreraTecnicaForm,setCarreraTecnicaForm] = useState(initialCarreraTecnicaForm);

    const {carreraId, carreraTecnica} = carreraTecnicaForm;

    useEffect(()=> {setCarreraTecnicaForm(carreraTecnicaSelected)},[carreraTecnicaSelected]);

    const onInputChange = ({target}) => {        
        const {name,value} = target;
        setCarreraTecnicaForm({
            ...carreraTecnicaForm,
            [name]: value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(!carreraTecnica){
            Swal.fire('Error de validaciòn',
            'Debe completar los campos del formulario',
            'error');
            return;
        }
        if(carreraId){
            handlerUpdateCarreraTecnica({carreraId,carreraTecnica})
        } else {
            handlerAddCarreraTecnica(carreraTecnicaForm);
        }
        setCarreraTecnicaForm(initialCarreraTecnicaForm);
        handlerCloseForm();
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setCarreraTecnicaForm(initialCarreraTecnicaForm);
    }

    return (
        <form onSubmit = {onSubmit}>
            <input className="form-control my-3 w-75" placeholder="Carrera Técnica" name="carreraTecnica" value={carreraTecnica} onChange={onInputChange}/>
            <button className="btn btn-primary" type="submit" >{carreraId.length > 0 ? 'Guardar': 'Crear'}</button>
            <button className="btn btn-primary mx-2" onClick={() => {onCloseForm()}}>Cerrar</button>
        </form>
    )
}