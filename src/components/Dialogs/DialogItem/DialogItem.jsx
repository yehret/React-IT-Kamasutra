import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`

    return(
        <div className={s.dialog + ' ' + s.active} >
            <NavLink to={path} className = { navData => navData.isActive ? s.active : s.item }>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
