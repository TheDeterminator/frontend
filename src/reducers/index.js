import { GET_GLOBAL_STORIES,
        GET_COORDINATOR_STORIES,
        NEW_STORY,
        LOGIN,
        REGISTER,
        DELETE_STORY,
        UPDATE_STORY,
        GET_STORY_BY_ID,
        GET_COORD_USER,
        UPDATE_COORD_USER,
        DELETE_COORD_USER,
        GET_DONOR_USER,
        DELETE_DONOR_USER,
        UPDATE_DONOR_USER,
        LOADING,
        LOGOUT } from '../actions';

const initialState = {
  globalStories: [],
  coordinatorStories: [],
  storyByID: {},
  userLoggedIn: false,
  user: {},
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
      case LOADING:
        return {...state, loading: true};
      case GET_GLOBAL_STORIES:
        return {...state, globalStories: action.payload, userLoggedIn: true};
      case GET_COORDINATOR_STORIES:
        return {...state, coordinatorStories: action.payload, loading: false, userLoggedIn: true};
      case GET_STORY_BY_ID:
        return {...state, storyByID: action.payload, userLoggedIn: true};
      case NEW_STORY:
        state.coordinatorStories.push(action.payload)
        return {...state, userLoggedIn: true};
      case DELETE_STORY:
        return {...state, coordinatorStories: action.payload, userLoggedIn: true};
      case UPDATE_STORY:
        return {...state, storyByID: action.payload, userLoggedIn: true};
      case GET_COORD_USER:
        return {...state, user: action.payload, userLoggedIn: true}
      case LOGIN:
        return {...state, userLoggedIn: action.payload};
      case LOGOUT:
        return {...state, userLoggedIn: false}
      case REGISTER:
        return {...state};
      default:
        return state;
    }
}
