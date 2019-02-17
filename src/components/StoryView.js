import React from 'react';
import {connect} from 'react-redux';
import {getGlobalStories} from '../actions';

class StoryView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seletedStory: {}
    }
  }

  componentDidMount(){
    this.props.globalStories.forEach(story => console.log(story.id));
    const currentStory = this.props.globalStories.filter(story => story.id === Number(this.props.match.params.id));
    console.log(currentStory);
    this.setState({
      seletedStory: currentStory[0]
    });
  }

  render(){
    return (
      <div>
        <h1>{this.state.seletedStory.title}</h1>
        <h2>{this.state.seletedStory.country}</h2>
        <p>{this.state.seletedStory.description}</p>
        <button>Donate</button>
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    globalStories: state.globalStories
  };
}
export default connect(mstp, {getGlobalStories: getGlobalStories})(StoryView);
