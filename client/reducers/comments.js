function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      // return existing state with new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case "REMOVE_COMMENT":
      console.log("Removing Comment");
      //return without the deleted comment
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  //console.log(state, action);
  if (typeof action.postId !== "undefined") {
    return {
      //take current state and overwrite post with new one
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
