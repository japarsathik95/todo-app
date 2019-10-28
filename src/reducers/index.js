let initialState = {
  todos: []
};

function getId(state) {
  return (
    state.todos.reduce((maxId, todo) => {
      return Math.max(todo.id, maxId);
    }, -1) + 1
  );
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      const todoObj = {
        title: action.title,
        completed: false,
        id: getId(state)
      };
      return { ...state, todos: [todoObj, ...state.todos] };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.id;
        })
      };
    case "COMPLETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => {
          if (todo.id === action.id) {
            todo.completed = true;
          }
          return todo;
        })
      };
    default:
      return state;
  }
}
