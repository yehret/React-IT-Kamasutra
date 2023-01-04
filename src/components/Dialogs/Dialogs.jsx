import s from './Dialogs.module.css'
import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { ElementCreator } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const Textarea = ElementCreator("textarea")

const maxLength100 = maxLengthCreator(100)

// import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
    // debugger
    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} name={el.name} />)
    let messagesElements = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>)


    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }
    
    return(
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.send_message}>
                <Field validate={[required, maxLength100]} component={Textarea} name="newMessageText" placeholder="Enter new message: "/>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'DialogsNewMessage' })(AddMessageForm)



export default Dialogs;