import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentSelector from './contentSelector';
import DropdownPage from './contentSelectorMB';

import QuickLinks from './Content/QuickLinks';
import Resources from './Content/Resources';
import Campaigns from './Content/Campaigns';
import EmployeeResources from './Content/EmployeeResources';
import SalesProcess from './Content/SalesProcess';
import Wingbats from './Content/Wingbats';

export default class MainContent extends Component {

constructor(props) {
  super(props);

  MainContent.propTypes = {
    navItems: PropTypes.array.isRequired,
    currentIndex: PropTypes.number.isRequired,
    handleSubNavClick: PropTypes.func.isRequired
  }
}

// separated logic and display
renderSubcontentMenu(navItems, index) {
  let currentNav = navItems[index];
  if (currentNav.subContent !== undefined) {
    return (
        <DropdownPage
          currentNav={currentNav}
          handleSubNavClick={this.props.handleSubNavClick}
        />
    );
  } else {
    return (
      <h2>{currentNav.name}</h2>
    )
  }
}

render(){
    const RenderMe = this.props.navItems[this.props.currentIndex].route;
    return (
      <div className="mainContentWrapper">
        <div className="subheader-selector">
        {this.renderSubcontentMenu(this.props.navItems, this.props.currentIndex)}
        </div>
        <RenderMe selectedNav={this.props.navItems[this.props.currentIndex]} />
      </div>
    );
  }
}
