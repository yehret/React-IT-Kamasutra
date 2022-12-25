import Dialogs from './Dialogs';
import { connect } from 'react-redux';

import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageActionCreator: () => dispatch(addMessageActionCreator()),
        updateNewMessageActionCreator: (text) => dispatch(updateNewMessageActionCreator(text))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;