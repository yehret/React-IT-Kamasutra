import React from "react";
import style from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })

        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
        }
    }

    render() {
        return (
        <>  
            {!this.state.editMode
            ? <span className={style} onDoubleClick={ this.activateEditMode }>{this.state.status || 'unknown'}</span>
            : <input onChange={ this.onStatusChange } autoFocus onBlur={ this.deactivateEditMode }  value={this.state.status}></input>}
        </>
        )
    }
}

export default ProfileStatus;