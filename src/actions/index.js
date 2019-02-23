import axios from 'axios';

export const GET_GLOBAL_STORIES = 'GET_GLOBAL_STORIES';
export const GET_COORDINATOR_STORIES = 'GET_COORDINATOR_STORIES';
export const NEW_STORY = 'NEW_STORY';
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const DELETE_STORY = 'DELETE_STORY';
export const UPDATE_STORY = 'UPDATE_STORY';
export const GET_STORY_BY_ID = 'GET_STORY_BY_ID';
export const GET_COORD_USER = 'GET_COORD_USER';
export const UPDATE_COORD_USER = 'UPDATE_COORD_USER';
export const DELETE_COORD_USER = 'DELETE_COORD_USER';
export const GET_DONOR_USER = 'GET_DONOR_USER';
export const DELETE_DONOR_USER = 'DELETE_DONOR_USER';
export const UPDATE_DONOR_USER = 'UPDATE_DONOR_USER';
export const LOADING = 'LOADING';
export const LOGOUT = 'LOGOUT';
export const MY_STORIES = 'LOGOUT';
export const ALL_STORIES = 'LOGOUT';

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
}

export const switchToMyStories = () => dispatch => {
  dispatch({
    type: MY_STORIES
  });
}

export const switchToAllStories = () => dispatch => {
  dispatch({
    type: ALL_STORIES
  });
}

export const getGlobalStories = options => dispatch => {
  dispatch({type:LOADING});
  axios
    .get('https://test-bountiful.herokuapp.com/donor/home', options)
    .then(response => {
      dispatch({
        type: GET_GLOBAL_STORIES,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('Error: ', err);
    });
}

export const getCoordinatorStories = (id, options) => dispatch => {
  dispatch({type:LOADING});
  axios
    .get(`https://test-bountiful.herokuapp.com/coord/${id}/home`, options)
    .then(response => {
      dispatch({
        type: GET_COORDINATOR_STORIES,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('Error: ', err);
    });
}

export const getStoryByID = (id, options) => dispatch => {
  axios
    .get(`https://test-bountiful.herokuapp.com/story/${id}`, options)
    .then(response => {
      dispatch({
        type: GET_STORY_BY_ID,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}

export const newStory = (id, story, options) => dispatch => {
  axios
    .post(`https://test-bountiful.herokuapp.com/coord/${id}`, story, options)
    .then(response => {
      dispatch({
        type: NEW_STORY,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('New Story error: ', err);
    });
}

export const login = (user) => dispatch => {
  axios
    .post(`https://test-bountiful.herokuapp.com/login`, user)
    .then(response => {
      localStorage.setItem('jwt', response.data.token);
      localStorage.setItem('user_id', response.data.user_id);
      dispatch({
        type: LOGIN,
        payload: true
      });
    })
    .catch(err => {
      console.log("Login Error: ", err);
    });
}

export const register = (newUser) => dispatch => {
  axios
    .post(`https://test-bountiful.herokuapp.com/register`, newUser)
    .then(response => {
      dispatch({
        type: REGISTER
      });
    })
    .catch(err => {
      console.log("Registration Error: ", err);
    });
}

export const deleteStory = (storyID, options) => dispatch => {
  axios
  .delete(`https://test-bountiful.herokuapp.com/story/${storyID}`, options)
  .then(response => {
    dispatch({
      type: DELETE_STORY,
      payload: response.data
    });
  })
  .catch(err => {
    console.log("Deletion Error: ", err);
  });
}

export const updateStory = (storyID, story, options) => dispatch => {
  axios
    .put(`https://test-bountiful.herokuapp.com/story/${storyID}`, story, options)
    .then(response => {
      dispatch({
        type: UPDATE_STORY,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('Update Error: ', err);
    });
}

////////////////////////////////////

export const getCoordUser = (id, options) => dispatch => {
  axios
    .get(`https://test-bountiful.herokuapp.com/coord/${id}`, options)
    .then(response => {
      console.log(response);
      dispatch({
        type: GET_COORD_USER,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('Update Error: ', err);
    });
}
export const updateCoordUser = (id, options) => dispatch => {
  axios
    .put(`https://test-bountiful.herokuapp.com/coord/${id}`, options)
    .then(response => {
      dispatch({
        type: UPDATE_COORD_USER,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('Update Error: ', err);
    });
}
export const deleteCoordUser = (id, options) => dispatch => {
  axios
    .delete(`https://test-bountiful.herokuapp.com/coord/${id}`, options)
    .then(response => {
      dispatch({
        type: DELETE_COORD_USER,
        payload: ''
      });
    })
    .catch(err => {
      console.log('Update Error: ', err);
    });
}

export const getDonorUser = (id, options) => dispatch => {
  axios
    .get(`https://test-bountiful.herokuapp.com/donor/${id}`, options)
    .then(response => {
      dispatch({
        type: GET_DONOR_USER,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('Update Error: ', err);
    });
}
export const updateDonorUser = (id, options) => dispatch => {
  axios
    .put(`https://test-bountiful.herokuapp.com/donor/${id}`, options)
    .then(response => {
      dispatch({
        type: UPDATE_DONOR_USER,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('Update Error: ', err);
    });
}
export const deleteDonorUser = (id, options) => dispatch => {
  axios
    .delete(`https://test-bountiful.herokuapp.com/donor/${id}`, options)
    .then(response => {
      dispatch({
        type: DELETE_DONOR_USER,
        payload: ''
      });
    })
    .catch(err => {
      console.log('Update Error: ', err);
    });
}
