import s from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Serge"},
        {id: 2, name: "Dimych"},
        {id: 3, name: "Valerjane"},
        {id: 4, name: "Den"},
        {id: 5, name: "Max"},
        {id: 6, name: "Bogjan"},
        {id: 7, name: "Oleg"},
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Psh-psh-psh"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Im cool, man"},
    ]

    let dialogsElements = dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
    let messagesElements = messages.map(el => <Message  id={el.id} message={el.message}/>)


    return(
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name="Oleg" id="7"/> */}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/* <Message message={messages[0].message} />
                <Message message="Psh-psh-psh<" /> */}
            </div>
        </div>
    );
}

export default Dialogs;