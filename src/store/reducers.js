import constants from "../constants"

function goal (state, action) {
  if (action.type === constants.SET_GOAL) {
    return action.payload;
  } else {
    return state;
  }
}

export default goal;