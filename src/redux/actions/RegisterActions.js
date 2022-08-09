import { toast } from "react-toastify"
import { auth } from "../../services/FireBaseConfig"

export const GET_LOGIN_DATA = 'GET_LOGIN_DATA'
export const CHANGE_SESSION_ACTIONS = 'CHANGE_SESSION_ACTIONS'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const get_login_data_actions = (loginData) => {
    return {
        type: GET_LOGIN_DATA,
        payload: loginData
    }
}

export const loginSuccess = (success) => {
    return {
        type: LOGIN_SUCCESS,
        payload: success
    }
}

export const change_session_actions = (loginData) => {
    return {
        type: CHANGE_SESSION_ACTIONS,
        payload: loginData
    }
}

export const loginActions = (valor) => {
    return (dispatch) => {
        console.log(valor);
        dispatch(get_login_data_actions(valor))
        auth.signInWithEmailAndPassword(valor.email, valor.password)
            .then((user) => {
                if (user) {
                    console.log(user);
                    dispatch(loginSuccess(true))
                    toast.success(user.email)
                }
            }).catch((error) => {
                const errorCode = error.code
                toast.error(errorCode)
            })
    }
}

export const registerAction = (valor) => {
    return (dispatch) => {
        console.log(valor);
        dispatch(get_login_data_actions(valor));
        auth.createUserWithEmailAndPassword(valor.email, valor.password)
            .then((auth) => {
                if (auth) {
                    console.log(auth);
                    dispatch(loginSuccess(true))
                    toast.success("Has Iniciado Session")
                }
            })
            .catch(error => {
                console.log(error);
                const m = JSON.stringify(error)
                const n = JSON.parse(m)
                console.log(n);

                if (n.code === 'auth/weak-password') {
                    toast.error('Contrasena corta')
                } else if (n.code === 'auth/email-already-in-use') {
                    toast.error('El correo ya existe')
                }
                // alert(error.message)
            })
    }
}

// export default registerAction;