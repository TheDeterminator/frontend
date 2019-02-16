import axios from 'axios';

export const GET_GLOBAL_STORIES = 'GET_GLOBAL_STORIES';

export const getGlobalStories = () => dispatch => {
  axios
    .get('https://bountiful-backend.herokuapp.com/donor/home')
    .then(response => {
      dispatch({
        type: GET_GLOBAL_STORIES,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}
