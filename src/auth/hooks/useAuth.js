import { loginUser } from "../services/authService";
import Swal from 'sweetalert2';
import { onLogin,onLogout} from '../../store/slices/auth/authSlice';
import { useDispatch, useSelector } from "react-redux";


export const useAuth = () => {   
    const dispatch = useDispatch();
    const { user, isAuth} = useSelector(state => state.auth);
    
    const handlerLogin = (username,password) => {

        loginUser({username,password}).then(response => {
            if(response && response.data && response.data.access_token){
                const {access_token} = response.data
                localStorage.setItem('token',access_token);
                const user = JSON.parse(atob(access_token.split('.')[1]));
                dispatch(onLogin({user}));
                localStorage.setItem('login',JSON.stringify( {isAuth:true, user} ));  
                Swal.fire('Login',`Bienvenido ${user.apellidos} ${user.nombres}`,'success');          
            } else {
                Swal.fire('Error Login', 'Username o password son invalidos','error');
            }    
        }).catch(error => {
            Swal.fire('Error Login', 'Username o password son invalidos','error');
        });
        
        /*const response = await loginUser({username,password});
        if(response && response.data && response.data.access_token){
            const {access_token} = response.data
            localStorage.setItem('token',access_token);
            const user = JSON.parse(atob(access_token.split('.')[1]));
            dispatch({
                type: 'login',
                payload: user
            });
            localStorage.setItem('login',JSON.stringify( {isAuth:true, user} ));  
            Swal.fire('Login',`Bienvenido ${user.apellidos} ${user.nombres}`,'success');          
        } else {
            Swal.fire('Error Login', 'Username o password son invalidos','error');
        }*/
    }

    const handlerLogout = () => {
        dispatch(onLogout());
        localStorage.clear();
        localStorage.removeItem('token');
        localStorage.removeItem('login');
    }

    return {
        login: {
            user,
            isAuth
        },
        handlerLogin,
        handlerLogout
    }
}