const ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessageActionCreator = (text) => ({ type: ADD_MESSAGE, messageText: text })

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
}

const dialogsReducer = (state = initialState, action) => {


    switch(action.type) {
        case ADD_MESSAGE: {
            let message = action.messageText
            return {
                ...state,
                messages: [...state.messages, {id: state.messages[state.messages.length - 1].id + 1, message: message}],
             }
        }
        default: return state;
    }


}

export default dialogsReducer