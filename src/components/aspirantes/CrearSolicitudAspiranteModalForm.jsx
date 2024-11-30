import { AspiranteForm } from "./AspiranteForm"

export const CrearSolicitudAspiranteModalForm = () => {
    return (
        <div className="modal" style={{display: "block"}} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Crear Solicitud</h5>
                    </div>
                    <div className="modal-body">
                        <AspiranteForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}