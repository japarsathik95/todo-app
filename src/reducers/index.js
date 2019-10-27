let initialState = {
    todos:[]
}

function getId(state) {  
    return state.todos.reduce((maxId, todo) => {   
        return Math.max(todo.id, maxId)  
    }, -1) + 1
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TODO' :
            const todoObj = {
                title: action.title,
                completed: false,          
                id: getId(state)
            }
            console.log({...state, todos:[todoObj, ...state.todos] }    );
            return {...state, todos:[todoObj, ...state.todos] };
        default :
            return state;
    }
}