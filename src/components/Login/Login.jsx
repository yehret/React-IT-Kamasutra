import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators"
import { ElementCreator } from "../common/FormsControls/FormsControls";

const maxLength20 = maxLengthCreator(20)

const Input = ElementCreator("input")

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength20]}  name={"login"} placeholder={"Login"} component={Input}/>
            </div>
            <div>
                <Field validate={[required, maxLength20]} name={"password"} placeholder={"Password"} component={Input}/>
            </div>
            <div>
                <Field name={"rememberMe"} type={"checkbox"} component={Input}/> Remember me
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
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;