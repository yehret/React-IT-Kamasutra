import s from './Dialogs.module.css'
import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
    let messagesElements = props.dialogsPage.messages.map(el => <Message id={el.id} message={el.message}/>)

    const newMessageText = props.dialogsPage.newMessageText;

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange= () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageActionCreator(text))
    }

    return(
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.send_message}>
                    <textarea onChange = { onMessageChange } ref={newMessage} value={newMessageText} />
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

            
        </div>
    );
}

export default Dialogs;