import React from 'react';

import UserTypeSelection from '../components/UserTypeSelection';
import SignUpModal from '../components/SignUpModal';

class RegistrationPage extends React.Component {
  constructor(){
    super();
    this.state = {
      userType: '',
      selectionViewToggle: true,
      coordinatorSelected: false,
      countries: ['Bolivia', 'Brazil', 'Cambodia', 'Colombia', 'Ecuador', 'El_Salvador', 'Ghana', 'Guatemala', 'Haiti', 'Honduras', 'Kiribati', 'Madagascar', 'Mongolia', 'Nicaragua', 'Paraguay', 'Peru', 'Philippines', 'Sierra_Leone', 'Zimbabwe']

    }
  }

  selectCoordinator = e => {
    this.setState({
      userType: 'Coordinator',
      selectionViewToggle: false,
      coordinator: true
    });
  }

  selectDonor = e => {
    this.setState({
      userType: 'Donor',
      selectionViewToggle: false
    });
  }

  continueButton = e => {
    this.setState({
      coordinatorSelected: true
    });
  }

  backButton = e => {
    this.setState({
      coordinatorSelected: false
    });
  }

  render() {
    return (
      <div>
        {this.state.selectionViewToggle ? <UserTypeSelection selectCoordinator={this.selectCoordinator} selectDonor={this.selectDonor}/> : null}
        {!this.state.selectionViewToggle ? <SignUpModal
          countries={this.state.countries}
          userType={this.state.userType}
          coordinatorSelected={this.state.coordinatorSelected}
          continueButton={this.continueButton}
          backButton={this.backButton}
          history={this.props.history}/> : null}
      </div>
    );
  }
}

export default RegistrationPage;
