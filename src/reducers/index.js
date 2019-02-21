import { GET_GLOBAL_STORIES,
        GET_COORDINATOR_STORIES,
        NEW_STORY,
        LOGIN,
        REGISTER,
        DELETE_STORY,
        UPDATE_STORY,
        GET_STORY_BY_ID } from '../actions';

const initialState = {
  globalStories: [],
  coordinatorStories: [],
  storyByID: {},
  userLoggedIn: false
}

export default (state = initialState, action) => {
  switch (action.type) {
      case GET_GLOBAL_STORIES:
        return {...state, globalStories: action.payload};
      case GET_COORDINATOR_STORIES:
        return {...state, coordinatorStories: action.payload};
      case GET_STORY_BY_ID:
        return {...state, storyByID: action.payload};
      case NEW_STORY:
        return {...state, coordinatorStories: action.payload};
      case DELETE_STORY:
        return {...state, coordinatorStories: action.payload};
      case UPDATE_STORY:
        return {...state, coordinatorStories: action.payload};
      case LOGIN:
        return {...state, userLoggedIn: action.payload};
      case REGISTER:
        return {...state};
      default:
        return state;
    }
}
