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
        LOADING} from '../actions';

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
        return {...state, loading: true}
      case GET_GLOBAL_STORIES:
        return {...state, globalStories: action.payload, loading: false};
      case GET_COORDINATOR_STORIES:
        return {...state, coordinatorStories: action.payload, loading: false};
      case GET_STORY_BY_ID:
        return {...state, storyByID: action.payload};
      case NEW_STORY:
        state.coordinatorStories.push(action.payload)
        return {...state};
      case DELETE_STORY:
        return {...state, coordinatorStories: action.payload};
      case UPDATE_STORY:
        return {...state, storyByID: action.payload};
      case GET_COORD_USER:
        return {...state, user: action.payload}
      case LOGIN:
        return {...state, userLoggedIn: action.payload};
      case REGISTER:
        return {...state};
      default:
        return state;
    }
}
