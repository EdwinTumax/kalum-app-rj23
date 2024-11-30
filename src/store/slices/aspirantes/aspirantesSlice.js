import { createSlice } from '@reduxjs/toolkit'

export const inititalAspiranteForm = {
    noExpediente: '',
    apellidos: '',
    nombres: '',
    direccion: '',
    telefono: '',
    email: '',
    carreraId: '',
    examenId: '',
    jornadaId: ''
}

export const aspirantesSlice = createSlice({
    name: 'aspirantes',
    initialState: {
        visibleFormSolicitud: false
    },
    reducers: {
        addSolicitudAspirante: (state, action) => {
            state.aspirantes = [
                ...state.aspirantes,
                {
                    ...action.payload
                }
            ];
            state.visibleFormSolicitud = false;    
        },
        onOpenSolicitudAspirante: (state) => {
            state.visibleFormSolicitud = true;
        },
        onCloseSolicitudAspirante: (state) => {
            state.visibleFormSolicitud = false;
        }
    }
});

export const {
    addSolicitudAspirante,
    onOpenSolicitudAspirante,
    onCloseSolicitudAspirante
} = aspirantesSlice.actions;