import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import ListviewComponent from '../components/ListviewComponent';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class CoordinatorHome extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <ListContainer>
          {this.props.stories.map(story => <ListviewComponent story={story}/>)}
        </ListContainer>
        
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    stories: state.testData
  };
}

export default connect(mstp, null)(CoordinatorHome)
