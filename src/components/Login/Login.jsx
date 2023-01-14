import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators"
import { ElementCreator } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { createField } from "../common/FormsControls/FormsControls";

import style from "../common/FormsControls/FormsControls.module.css"

const maxLength50 = maxLengthCreator(50)

const Input = ElementCreator("input")

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form className={style.loginForm} onSubmit={handleSubmit}>
                {createField("E-mail", "email", [required, maxLength50], Input)}

                {createField("Password", "password", [required, maxLength50], Input, {type: "password"})}

                {createField(null, "rememberMe", null, Input, {type: "checkbox"}, "Remember me")}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div className={style.loginbtn}>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberme )
    }

    if(props.isAuth) {
        return <Navigate to={`/profile/${props.userId}`} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
})

export default connect(mapStateToProps, {login})(Login)