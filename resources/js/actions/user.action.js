import * as c from '../constants/user.constants'
import * as auth from "../services/auth";
import api from "../services/api"

export const login = (email, password) => dispatch => {
        dispatch({type: c.LOGIN_REQUEST});
        api.post('/login',{
            email,
            password
        })
        .then(response => auth.login(response.data.token))
        .then(() => {
            dispatch({type: c.LOGIN_SUCCESS});
        })
        .catch((error)=>{
            let payload  ="";
            if (error.response) {
                payload = "Dados de Login Inválidos!";
            } else if (error.request) {
                payload = "Erro ao realizar login!";
            } else {
                // Something happened in setting up the request that triggered an Error
                payload = 'Erro'+ error.message;
            }
            dispatch({type: c.LOGIN_FAILURE, payload});
    });

};

export const logout = () => {
    auth.logout();
    return {type: c.LOGOUT};

};
