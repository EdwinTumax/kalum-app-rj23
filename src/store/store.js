import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth/authSlice'
import { carrerasTecnicasSlice } from './slices/carreras-tecnicas/carrerasTecnicasSlice';
import { aspirantesSlice } from './slices/aspirantes/aspirantesSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        carrerasTecnicas: carrerasTecnicasSlice.reducer,
        aspirantes: aspirantesSlice.reducer
    }
});