import React from "react";
import { reduxForm } from "redux-form";
import { createField, ElementCreator } from "../../common/FormsControls/FormsControls";
import p from "./ProfileInfo.module.css"
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
import style from "../../common/FormsControls/FormsControls.module.css"

const Input = ElementCreator("Input")
const Textarea = ElementCreator("textarea")

const ProfileDataForm = (props) => {
    return (
        <form className={p.userInfo} onSubmit={props.handleSubmit}>
            <button onClick={() => {}}>Save</button>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div className={p.userName}>
                <p>Name: { createField("Name:", "fullname", [], Input) }</p>

                <p>Status: <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/></p>

                <p>Looking for a job: { createField("", "lookingForAJob", [], Input, {type: "checkbox"}) }</p>
                
                <p>My professional skills: { createField("", "lookingForAJobDescription", [], Textarea) }</p>

                <p>About Me: { createField("", "aboutMe", [], Textarea) }</p>
            </div>
            <div className={p.userContacts}>
                <h4>Contacts: </h4>
                {Object.keys(props.profile.contacts).map(key => {
                    return <div key={key} className={p.userContactItem}> <p>{key + ":"}</p> { createField("", "contacts." + key, [], Input) }</div>
                })}
            </div>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({form: 'edit-profile', enableReinitialize: true, destroyOnUnmount: false})(ProfileDataForm)

export default ProfileDataFormRedux