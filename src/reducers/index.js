import { GET_GLOBAL_STORIES,
        GET_COORDINATOR_STORIES,
        NEW_STORY,
        LOGIN,
        REGISTER,
        DELETE_STORY,
        UPDATE_STORY } from '../actions';

const initialState = {
  globalStories: [],
  coordinatorStories: []
}

export default (state = initialState, action) => {
  switch (action.type) {
      case GET_GLOBAL_STORIES:
        return {globalStories: action.payload};
      case GET_COORDINATOR_STORIES:
        return {coordinatorStories: action.payload};
      case NEW_STORY:
        return {coordinatorStories: action.payload};
      case DELETE_STORY:
        return {coordinatorStories: action.payload};
      case UPDATE_STORY:
        return {coordinatorStories: action.payload};
      case LOGIN:
        return {...state};
      case REGISTER:
        return {...state};
      default:
        return state;
    }
}
