// server.get('/coord/:id/home') //fetches that coordinator's array of their own stories
// server.get('/coord/:id') //fetches that coordinator's profile info
// server.put('/coord/:id') //updates that coordinator's profile info
// server.delete('/coord/:id') //deletes that coordinator's profile
// server.get('/story/:id') //fetches that story by its id
// server.post('/coord/:id') //add a new story by the coordinator's id
// server.put('/story/:id') //updates that story by its id
// server.delete('/story/:id') //deletes that story by its id

// export const name = () => dispatch => {
//   axios
//     .get('https://bountiful-backend.herokuapp.com/')
//     .then(response => {
//       dispatch({
//         type: ,
//         payload:
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

import axios from 'axios';

export const GET_GLOBAL_STORIES = 'GET_GLOBAL_STORIES';
export const GET_COORDINATOR_STORIES = 'GET_COORDINATOR_STORIES';
export const NEW_STORY = 'NEW_STORY';

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

export const getCoordinatorStories = (user) => dispatch => {
  axios
    .get(`https://bountiful-backend.herokuapp.com/coord/${user}/home`)
    .then(response => {
      dispatch({
        type: GET_COORDINATOR_STORIES,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}

export const newStory = (user, story) => dispatch => {
  axios
    .post(`https://bountiful-backend.herokuapp.com/coord/${user}`, story)
    .then(response => {
      dispatch({
        type: NEW_STORY,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}
