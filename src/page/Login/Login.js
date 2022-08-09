import React, { useState } from "react"
// import { /* Link, */ useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { change_session_actions, get_login_data_actions } from "../../redux/actions/RegisterActions"
import { LoginButtons } from "../../components/LoginButton/LoginButtons"


export const Login = () => {
    const loginState = useSelector((state) => state.loginReducer)

    const [login, setlogin] = useState({
        email: loginState.email,
        pass: loginState.password
    })

    return (
        <div className="container-fluid pt-3 d-flex justify-content-center" style={{ height: '90vh' }}>
            <div /* onSubmit={(e) => SingIn(e)} */
                className="border rounded d-flex flex-column align-items-center bg-white" style={{ width: '400px', height: '600px' }}>
                <div className="text-center w-75 m-3 mt-5">
                    <h3 className="text-white bg-dark p-2 rounded">Login</h3>
                </div>

                <div className="form-group w-75 mt-5 d-flex flex-column">
                    <label htmlFor="email">Email</label>
                    <input placeholder="Escriba el Email" required={true} className="w-100 form-control" type="email" name="email" id="email"
                        value={login.email}
                        onChange={({ target: { value } }) => setlogin(login => ({ ...login, email: value }))}
                    />
                </div>

                <div className="form-group mt-2 w-75 mb-5 d-flex flex-column">
                    <label htmlFor="pass">Password</label>
                    <input placeholder="Escriba el Password" required={true} className="w-100 form-control" type="password" name="pass" id="pass"
                        value={login.pass}
                        onChange={({ target: { value } }) => setlogin(login => ({ ...login, pass: value }))}
                    />
                </div>

                <div className="form-group d-flex justify-content-center flex-column w-75">
                    {<LoginButtons data={login} />}

                    {/* <button className="border btn btn-primary"
                     onSubmit={(e) => SingIn(e)} 
                    >
                        {message}
                    </button>
                    <label
                        onClick={() => dispatch(change_session_actions({ isLogin: !loginState.isLogin }))}
                        className="text-primary small mt-1 border-0 bg-transparent text-start">
                        {loginState.isLogin ? "No estas Registrado?" : "Ya tienes un Usuario?"}
                    </label>

                    <button className="btn text-center mt-4 ml-5 border d-flex justify-content-center">
                        <div className="d-flex justify-content-around">
                            <img className="mr-5" style={{ width: '12%' }} src="google.png" alt="" />
                            <span>Login With Google</span>
                        </div>
                    </button> */}

                </div>
            </div>
        </div>
    )
}

