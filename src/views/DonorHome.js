import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

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
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <GridviewContainer>
        {this.props.stories.map(story => <GridviewComponent story={story}/>)}
      </GridviewContainer>
    );
  }
}

const mstp = (state) => {
  return {
    stories: state.testData
  };
}

export default connect(mstp, null)(DonorHome)
