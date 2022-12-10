import s from './Dialogs.module.css'
import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
    let messagesElements = props.messages.map(el => <Message id={el.id} message={el.message}/>)

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value
        alert(text)
    }
    return(
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.send_message}>
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>Send</button>
                </div>
            </div>

            
        </div>
    );
}

export default Dialogs;


/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
<DialogItem name="Oleg" id="7"/> */


/* <Message message={messages[0].message} />
<Message message="Psh-psh-psh<" /> */