import { CarreraTecnicaForm } from "./CarreraTecnicaForm"
import { useCarreraTecnica } from "../../hooks/useCarreraTecnica"

export const CarreraTecnicaModalForm = () => {
    
    const {carreraTecnicaSelected, handlerCloseForm} = useCarreraTecnica();

    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{display: "block"}} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {carreraTecnicaSelected.carreraId.length > 0 ? 'Editar' : 'Crear'}
                            </h5>
                        </div>
                        <div className="modal-body">
                            <CarreraTecnicaForm carreraTecnicaSelected= {carreraTecnicaSelected} handlerCloseForm = {handlerCloseForm} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}