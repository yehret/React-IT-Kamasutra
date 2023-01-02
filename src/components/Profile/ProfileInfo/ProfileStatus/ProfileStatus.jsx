import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: ':)'
    }

    activateEditMode () {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
        <>  
            {!this.state.editMode
            ? <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
            : <input autoFocus onBlur={ this.deactivateEditMode.bind(this) }  value={this.props.status}></input>}
        </>
        )
    }
}

export default ProfileStatus;