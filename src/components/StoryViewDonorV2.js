import React from 'react';
import {connect} from 'react-redux';
import {getStoryByID} from '../actions';
import styled from 'styled-components';

import theme from '../design/theme';
import Button from '../design/Button';

const StoryContainer = styled.div`
  max-width: 800px;
  widht: 100%;
  margin: 0 auto;
`
const ImageBanner = styled.img`
  width: 800px;
  height: 300px;
  object-fit: cover;
  margin: 0 auto;
  margin-top: 20px;
`
const Background = styled.div`
  max-width: 1000px;
  background-color: ${theme.color.primaryBgShading};
  margin: 0 auto;
`

class StoryViewDonorV2 extends React.Component {

  componentDidMount(){
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
          Authorization: token,
      }
    }
    this.props.getStoryByID(this.props.match.params.id, options);
  }

  render(){
    return (
      <div>
      <Button onClick={()=>this.props.history.push('/home/donor')}>Back</Button>
      {this.props.storyByID ? <Background>
        <ImageBanner src={this.props.storyByID.large_image}/>
        <StoryContainer>
          <h1>{this.props.storyByID.title}</h1>
          <h2>{this.props.storyByID.country}</h2>
          <p>{this.props.storyByID.description}</p>
          <Button alert>Donate</Button>
        </StoryContainer>
      </Background> : <div>Loading Data...</div>}
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    storyByID: state.storyByID
  };
}
export default connect(mstp, {getStoryByID: getStoryByID})(StoryViewDonorV2);
