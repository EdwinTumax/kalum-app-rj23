import Swal from 'sweetalert2'
import { findAll, save, remove, update } from "../services/carreraTecnicaService";
import { useDispatch, useSelector } from "react-redux";
import {
    loadingCarrerasTecnicas, 
    removeCarreraTecnica, 
    updateCarreraTecnica, 
    addCarreraTecnica, 
    onCarreraTecnicaSelectedForm,
    onOpenForm,
    onCloseForm
} from '../store/slices/carreras-tecnicas/carrerasTecnicasSlice';

const initialCarreraTecnicaForm = {
    carreraId: '',
    carreraTecnica: ''
}

const initialCarrerasTecnicas = []

export const useCarreraTecnica = () => {
    const {carrerasTecnicas, carreraTecnicaSelected, visibleForm} = useSelector(state => state.carrerasTecnicas);
    const dispatch = useDispatch();

    const getCarrerasTecnicas = async () => {
        const response = await findAll();
        dispatch(loadingCarrerasTecnicas(response.data));
    }

    const handlerAddCarreraTecnica = async (carreraTecnica) => {
        const response = await save(carreraTecnica);
        dispatch(addCarreraTecnica(response.data.carreraTecnica));
        Swal.fire('Carreras Técnicas', response.data.mensaje, 'success');
    }

    const handlerRemoveCarreraTecnica = async (id) => {
        const result = await Swal.fire({
            title: 'Esta seguro de eliminar el registro?',
            text: "No serà posible revertir este proceso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar el registro!'
        });
        if(result.isConfirmed){
            const response = await remove(id);
            dispatch(removeCarreraTecnica(id))
            Swal.fire('Carreras técnicas', response.data.mensaje, 'success');    
        }
    }

    const handlerUpdateCarreraTecnica = async(carreraTecnica) => {
        const response = await update(carreraTecnica);        
        dispatch(updateCarreraTecnica(carreraTecnica));
        Swal.fire('Carreras técnicas',response.data.mensaje,'success');
    }

    const handlerCarreraTecnicaSelectedForm = (carreraTecnica) => {
        dispatch(onCarreraTecnicaSelectedForm({...carreraTecnica}));
    }

    const handlerCloseForm = () => {
        dispatch(onCloseForm());
    }

    const handlerOpenForm = () => {
        dispatch(onOpenForm());
    }

    return {
        initialCarreraTecnicaForm,
        handlerAddCarreraTecnica,
        handlerRemoveCarreraTecnica,
        handlerCarreraTecnicaSelectedForm,
        handlerUpdateCarreraTecnica,
        handlerCloseForm,
        handlerOpenForm,
        visibleForm,
        carreraTecnicaSelected,
        carrerasTecnicas,
        getCarrerasTecnicas
    }
}