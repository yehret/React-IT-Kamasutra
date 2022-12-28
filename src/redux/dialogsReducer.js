const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newMessage: text })

let initialState = {
    dialogs: [
        {id: 1, name: "Serge"},
        {id: 2, name: "Dimych"},
        {id: 3, name: "Valerjane"},
        {id: 4, name: "Den"},
        {id: 5, name: "Max"},
        {id: 6, name: "Bogjan"},
        {id: 7, name: "Oleg"},
      ],
      
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Psh-psh-psh"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Im cool, man"},
      ],

      newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {


    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            }

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage],
             }
        }
        case UPDATE_NEW_MESSAGE: {
            console.log(action.newMessage);
            return {
                ...state,
                newMessageText: action.newMessage
             }
        }
        default: return state;
    }


}

export default dialogsReducer