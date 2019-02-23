import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getCoordinatorStories, newStory} from '../actions';
import { withRouter } from 'react-router-dom';

import ListviewComponent from '../components/ListviewComponent';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const NewStoryButton = styled.button`
  font-size: 24px;
  border: 1px solid black;
  border-radius: 25px;
  margin-top: 25px;
`

class CoordinatorHome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFetching: true
    }
  }

  async componentDidMount(){
    console.log("anything");
    const token = localStorage.getItem('jwt');
    const userID = localStorage.getItem('user_id');
    const options = {
      headers: {
          Authorization: token,
      }
    }
    this.props.getCoordinatorStories(userID, options);
    console.log('Before component mounts', this.props.coordinatorStories);
    const array = await this.props.getCoordinatorStories(userID, options);
    console.log(array);
    console.log('After component mounts', this.props.coordinatorStories);
    if(array){
      this.setState({
        isFetching: false
      })
    }
  }

  render(){
    return (
      <div>
        {this.state.isFetching ? <ListContainer>
          {this.props.coordinatorStories.map(story => <ListviewComponent key={story.id} story={story}/>)}
        </ListContainer> : <div>Loading Data...</div>}
        <Link to='/home/coordinator/new'>
          <NewStoryButton>+ New Story</NewStoryButton>
        </Link>
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    coordinatorStories: state.coordinatorStories
  };
}

export default withRouter(connect(mstp, {getCoordinatorStories: getCoordinatorStories})(CoordinatorHome));
