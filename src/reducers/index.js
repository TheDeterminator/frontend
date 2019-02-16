import {GET_GLOBAL_STORIES, GET_COORDINATOR_STORIES, NEW_STORY} from '../actions';

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
      default:
        return state;
    }
}
