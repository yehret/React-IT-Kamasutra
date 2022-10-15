import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to="/dialogs/1" className = { navData => navData.isActive ? s.active : s.item }>Serge</NavLink>
        </div>
    );
}

export default DialogItem;