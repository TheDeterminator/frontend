import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getCoordinatorStories, newStory} from '../actions'
import Popup from 'reactjs-popup';

// username: 'nicholl',
// password: 'rHUnhgFbkGRLNVyX',
// email: 'Nicholl.OblitasCosta@p3foundation.org',
// role: 'Coordinator',
// country: 'Kiribati',
// organization_title: 'CEO'

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
      open: false,
      story: {

      }
    }
  }

  openNewStory = e => {
    this.setState({ open: true });
  }

  closeNewStory = e => {
    this.setState({ open: false })
  }

  saveNewStory = e => {
    this.setState({open: false});
    this.props.newStory('nicholl', this.state.story)
  }

  componentDidMount(){
    this.props.getCoordinatorStories('nicholl');
    console.log(this.props.coordinatorStories);
  }

  render(){
    return (
      <div>
        <ListContainer>
          {this.props.coordinatorStories.map(story => <ListviewComponent story={story}/>)}
        </ListContainer>
        <NewStoryButton onClick={this.openNewStory}>+ New Story</NewStoryButton>
        <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeNewStory}>
          <input placeholder='title' />
          <input placeholder='story' />
          <button onClick={this.saveNewStory}>Save</button>
        </Popup>
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    coordinatorStories: state.coordinatorStories
  };
}

export default connect(mstp, {getCoordinatorStories: getCoordinatorStories, newStory: newStory})(CoordinatorHome)
