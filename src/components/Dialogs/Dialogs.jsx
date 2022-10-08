import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div>
                    <div className={s.dialog + ' ' + s.active}>
                        Serge
                    </div>
                    <div className={s.dialog}>
                        Dimych
                    </div>
                    <div className={s.dialog}>
                        Valerjane
                    </div>
                    <div className={s.dialog}>
                        Den
                    </div>
                    <div className={s.dialog}>
                        Max
                    </div>
                    <div className={s.dialog}>
                        Bogjan
                    </div>
                    <div className={s.dialog}>
                        Serge
                    </div>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Psh-psh-psh</div>
            </div>
        </div>
    );
}

export default Dialogs;