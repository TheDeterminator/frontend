import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getCoordinatorStories, newStory} from '../actions';

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
  }

  componentDidMount(){
    this.props.getCoordinatorStories('2');
  }

  render(){
    return (
      <div>
        <ListContainer>
          {this.props.coordinatorStories.map(story => <ListviewComponent key={story.id} story={story}/>)}
        </ListContainer>
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

export default connect(mstp, {getCoordinatorStories: getCoordinatorStories})(CoordinatorHome);
