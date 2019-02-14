import {GET_TEST} from '../actions';

const initialState = {
  testData: []
};

export default (state = initialState, action) => {
  switch (action.type) {
      case GET_TEST:
        return {};
      default:
        return state;
    }
}
