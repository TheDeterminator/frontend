import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getCoordinatorStories} from '../actions';
import { withRouter } from 'react-router-dom';

import ListviewComponent from '../components/ListviewComponent';

import Button from '../design/Button';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class CoordinatorHome extends React.Component {

  componentDidMount(){
    const token = localStorage.getItem('jwt');
    const userID = localStorage.getItem('user_id');
    const options = {
      headers: {
          Authorization: token,
      }
    }
    this.props.getCoordinatorStories(userID, options);
  }

  render(){
    return (
      <div>
         <Link to='/home/coordinator/new'>
          <Button story alert>Add Story <br />+</Button>
        </Link>       
        {!this.props.loading ? <ListContainer>
          {this.props.coordinatorStories.map(story => <ListviewComponent key={story.id} story={story}/>)}
        </ListContainer> : <div>Loading Data...</div>}
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    coordinatorStories: state.coordinatorStories,
    loading: state.loading
  };
}

export default withRouter(connect(mstp, {getCoordinatorStories: getCoordinatorStories})(CoordinatorHome));
