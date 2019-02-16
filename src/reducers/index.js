import {GET_GLOBAL_STORIES} from '../actions';

const initialState = {
  globalStories: []
}

export default (state = initialState, action) => {
  switch (action.type) {
      case GET_GLOBAL_STORIES:
        return {globalStories: action.payload};
      default:
        return state;
    }
}
