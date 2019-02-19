import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getCoordinatorStories, newStory} from '../actions';
import {withRouter} from 'react-router-dom';
import Popup from 'reactjs-popup';

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
        title: ``,
        description: ``
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
    this.props.newStory('2', this.state.story);
  }

  changeHandler = e => {
    this.setState({story: {...this.state.story ,[e.target.name] : e.target.value}})
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
        <NewStoryButton onClick={this.openNewStory}>+ New Story</NewStoryButton>
        <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeNewStory}>
          <input onChange={this.changeHandler} name='title' value={this.state.story.title} placeholder='title' />
          <input onChange={this.changeHandler} name='description' value={this.state.story.description} placeholder='story' />
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

export default withRouter(connect(mstp, {getCoordinatorStories: getCoordinatorStories, newStory: newStory})(CoordinatorHome))
