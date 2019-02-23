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
        UPDATE_DONOR_USER } from '../actions';

const initialState = {
  globalStories: [],
  coordinatorStories: [],
  storyByID: {},
  userLoggedIn: false,
  user: {},
  dummyData: ['test1','test2','test3','test4','test5','test6','test7','test8','test9','test9','test9','test9']
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
