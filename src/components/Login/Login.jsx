import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators"
import { ElementCreator } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

import style from "../common/FormsControls/FormsControls.module.css"

const maxLength50 = maxLengthCreator(50)

const Input = ElementCreator("input")

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength50]}  name={"email"} placeholder={"E-mail"} component={Input}/>
            </div>
            <div>
                <Field validate={[required, maxLength50]} type={"password"} name={"password"} placeholder={"Password"} component={Input}/>
            </div>
            <div>
                <Field name={"rememberMe"} type={"checkbox"} component={Input}/> Remember me
            </div>
            <div className={style.formSummaryError}>
                {props.error}
            </div>
            <div>
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