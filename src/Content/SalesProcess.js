import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Discovery from './ProcessSteps/Discovery';
import NewBusinessMeeting from './ProcessSteps/NewBusinessMeeting';
import TechnicalDeepDive from './ProcessSteps/TechnicalDeepDive';
import BusinessValueAssessment from './ProcessSteps/BusinessValueAssessment';
import GoNoGo from './ProcessSteps/GoNoGo';
import ProofOfConcept from './ProcessSteps/ProofOfConcept';
import Close from './ProcessSteps/Close';

export default class SalesProcess extends Component {

  constructor(props) {
    super(props);
    this.state = {
      componentMap: {
        'Discovery': Discovery,
        'NewBusinessMeeting': NewBusinessMeeting,
        'TechnicalDeepDive': TechnicalDeepDive,
        'BusinessValueAssessment': BusinessValueAssessment,
        'GoNoGo': GoNoGo,
        'ProofOfConcept': ProofOfConcept,
        'Close': Close
      }
    }
  }

    render () {
      //const RenderSubContent = this.state.subContentRoutes[this.props.salesProcessIndex].subRoute ;
      let current = this.props.selectedNav;
      let SubRoute = this.state.componentMap[current.subContent.subContentRoutes[current.selectedSub]];
      return (
        <SubRoute />
    );
  }
}
