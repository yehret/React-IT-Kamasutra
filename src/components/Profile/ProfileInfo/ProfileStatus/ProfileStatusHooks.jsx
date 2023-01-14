import React, { useState, useEffect }  from "react";
import style from "./ProfileStatus.module.css"

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    
    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const activateMode = () => setEditMode(true)

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = e => {
        setStatus(e.currentTarget.value)
    }

    return (
    <>  
        {!editMode
        ? <span className={ style } onDoubleClick={ activateMode }>{ props.status || 'unknown'}</span>
        : <input onChange={ onStatusChange } autoFocus onBlur={ deactivateEditMode }  value={ status }></input>}
    </>
    )
}

export default ProfileStatusHooks;