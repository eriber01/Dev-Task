// import { GET_LOGIN_DATA } from "../actions/LoginActions";

import { GET_LOGIN_DATA } from "../actions/RegisterActions"
import { CHANGE_SESSION_ACTIONS } from "../actions/RegisterActions";
import { LOGIN_SUCCESS } from "../actions/RegisterActions";

const initialState = {
    email: '',
    password: '',
    isLogin: true,
    success: false,
    user: {}
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN_DATA: {
            console.log(action);
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            }
        }
        case CHANGE_SESSION_ACTIONS: {
            console.log(action);

            return {
                ...state,
                isLogin: action.payload.isLogin
            }
        }
        case LOGIN_SUCCESS: {
            console.log(action);

            return {
                ...state,
                success: action.payload
            }
        }
        default: return state
    }
}

export default loginReducer