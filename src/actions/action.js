export const addTodo = title => {
  return {
    type: "ADD_TODO",
    title
  };
};

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id
  };
};

export const completeTodo = id => {
  return {
    type: "COMPLETE_TODO",
    id
  };
};
