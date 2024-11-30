import { createSlice } from "@reduxjs/toolkit";

const initialCarreraTecnicaForm = {
    carreraId: '',
    carreraTecnica: ''
}

export const carrerasTecnicasSlice = createSlice({
    name: 'carrerasTecnicas',
    initialState: {
        carrerasTecnicas: [],
        visibleForm: false,
        carreraTecnicaSelected: initialCarreraTecnicaForm
    },
    
    reducers: {
        updateCarreraTecnica: (state,action) => {
            state.carrerasTecnicas = state.carrerasTecnicas.map(ct => {
                if(ct.carreraId === action.payload.carreraId){
                    return {
                        ...action.payload
                    };
                }
                return ct;
            });
            state.carreraTecnicaSelected = initialCarreraTecnicaForm;
            state.visibleForm = false;
        }, 
        addCarreraTecnica: (state,action) => {
            state.carrerasTecnicas = [
                ...state.carrerasTecnicas,
                {
                    ...action.payload
                }
            ];
            state.carreraTecnicaSelected = initialCarreraTecnicaForm;
            state.visibleForm = false;
        },
        removeCarreraTecnica: (state, action) => {
            state.carrerasTecnicas = state.carrerasTecnicas.filter(carreraTecnica => carreraTecnica.carreraId !== action.payload);
        },
        loadingCarrerasTecnicas: (state, {payload}) => {
            state.carrerasTecnicas = payload;
        },
        onCarreraTecnicaSelectedForm: (state, {payload}) => {
            state.carreraTecnicaSelected = payload;
            state.visibleForm = true;
        },
        onOpenForm: (state) => {
            state.visibleForm = true;
        },
        onCloseForm: (state) => {
            state.visibleForm = false;
            state.carreraTecnicaSelected = initialCarreraTecnicaForm;
        }
    }
});

export const {
    updateCarreraTecnica,
    addCarreraTecnica,
    removeCarreraTecnica,
    loadingCarrerasTecnicas,
    onCarreraTecnicaSelectedForm,
    onOpenForm,
    onCloseForm
} = carrerasTecnicasSlice.actions;