import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`

    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}


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

    let dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = messages.map(el => <Message message={el.message} />)


    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div>
                    {dialogsElements}
                    {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name="Oleg" id="7"/> */}
                </div>
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