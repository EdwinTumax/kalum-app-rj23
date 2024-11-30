import { useDispatch, useSelector } from 'react-redux';
import { onOpenSolicitudAspirante, onCloseSolicitudAspirante} from '../store/slices/aspirantes/aspirantesSlice';

export const useAspirante = () => {
    
    const {visibleFormSolicitud} = useSelector(state => state.aspirantes);

    const dispatch = useDispatch();

    const handlerOpenForm = () => {
        dispatch(onOpenSolicitudAspirante())
    }

    const handlerCloseForm = () => {
        dispatch(onCloseSolicitudAspirante());
    }

    return {
        handlerOpenForm,
        handlerCloseForm,
        visibleFormSolicitud
    } 
}