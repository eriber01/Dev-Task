import React from "react"
import { auth } from "../../services/FireBaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { registerAction, change_session_actions, get_login_data_actions, loginActions } from "../../redux/actions/RegisterActions";
// import { SessionManagement } from "../../services/SessionManagement";
import { toast } from "react-toastify";
import { /* Link, */ useNavigate } from 'react-router-dom'



export const LoginButtons = ({ data }) => {
    const navigate = useNavigate()
    let loginState = useSelector((state) => state.loginReducer)
    const dispatch = useDispatch()
    let message = 'Iniciar Sesion'
    if (Object.keys(loginState.user).length) {
        message = "Logout"
    } else if (!loginState.isLogin) {
        message = 'Registrarse'
    }

    if (loginState.success) {
        navigate('/', { replace: true })
    }

    const SessionManagement = () => {

        console.log(data);

        if (!data.email.trim() || !data.pass.trim()) {
            toast.error("Debe llenar todos los Campos")
        } else if (!loginState.isLogin) {
            dispatch(registerAction({
                email: data.email.trim(),
                password: data.pass.trim(),
            }))
        } else if (loginState.isLogin) {
            dispatch(loginActions({
                email: data.email.trim(),
                password: data.pass.trim(),
            }))
            // toast.warn('login vacio')
        }
    }

    return (
        <>
            <button className="border btn btn-primary"
                onClick={() => SessionManagement()}
            >
                {message}
            </button>
            <button
                onClick={() => dispatch(change_session_actions({ isLogin: !loginState.isLogin }))}
                className="text-primary small mt-1 border-0 bg-transparent text-start">
                {loginState.isLogin ? "No estas Registrado?" : "Ya tienes un Usuario?"}
            </button>

            <button className="btn text-center mt-4 ml-5 border d-flex justify-content-center">
                <div className="d-flex justify-content-around">
                    <img className="mr-5" style={{ width: '12%' }} src="google.png" alt="" />
                    <span>Login With Google</span>
                </div>
            </button>
        </>
    )
}