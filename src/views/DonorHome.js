import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getGlobalStories} from '../actions';
import GridviewComponent from '../components/GridviewComponent';

const GridviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  margin: 0 auto;
`

class DonorHome extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getGlobalStories();
  }

  render(){
    return (
      <GridviewContainer>
        {this.props.globalStories.map(story => <GridviewComponent key={story.id} story={story}/>)}
      </GridviewContainer>
    );
  }
}

const mstp = (state) => {
  return {
    globalStories: state.globalStories
  };
}

export default connect(mstp, {getGlobalStories: getGlobalStories})(DonorHome);
