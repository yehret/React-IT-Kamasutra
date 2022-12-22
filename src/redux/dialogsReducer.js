const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newMessage: text })

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE: 
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            }

            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessage
            return state;

        default: return state;
    }


}

export default dialogsReducer