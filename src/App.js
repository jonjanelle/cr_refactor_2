import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './navigation';
import MainContent from './MainContent';

import QuickLinks from './Content/QuickLinks';
import Resources from './Content/Resources';
import Campaigns from './Content/Campaigns';
import EmployeeResources from './Content/EmployeeResources';
import SalesProcess from './Content/SalesProcess';
import Wingbats from './Content/Wingbats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      navItems: [
        { name: 'Quick Links', route: QuickLinks},
        { name: 'Resources', route: Resources },
        { name: 'Campaigns', route: Campaigns },
        { name: 'Sales Process', route: SalesProcess,
          subContent: {
            subContentOptions:['Discover', 'NBM', 'TDD', 'BVA', 'Go / No-Go',
                               'POC','Close'],
            subContentRoutes: ['Discovery', 'NewBusinessMeeting' ,'TechnicalDeepDive',
              'BusinessValueAssessment', 'GoNoGo', 'ProofOfConcept', 'Close']
          },
          selectedSub: 0 // Each item can track its own selected sub
        },
        { name: 'Employee Resources', route: EmployeeResources },
        { name: 'Wingbats', route: Wingbats }
      ]
    }

    // Bind generates a new function when called, and by doing this in the constructor
    // you ensure that this happens only once.
    // If you bind in a prop pass within a render function, the function is recreated
    // every time render is called (after each setState).
    this.handleNavClick = this.handleNavClick.bind(this);

    // Without this, the context of handleSubNavClick is the component from which it is called,
    // so you'd be setting the state of that component rather than this top-level component
    this.handleSubNavClick = this.handleSubNavClick.bind(this);
  }

  handleNavClick(indexToChange) {
    this.setState({currentIndex: indexToChange})
  }

  handleSubNavClick(newSubIndex) {
    // currentIndex points us to the current nav area, just need
    // to set the selectedSub of that selected nav
    let navs = this.state.navItems;
    navs[this.state.currentIndex].selectedSub = newSubIndex;
    this.setState({navItems: navs });
  }

  render() {
    return (
      <div className="App">
        <div className="app-wrapper">
          <div className="nav-wrapper">
            <Navigation
              role="navigation"
              className="nav-wrapper"
              handleNavClick={this.handleNavClick}
              currentIndex={this.state.currentIndex}
              navItems={this.state.navItems} />
          </div>
          <div className="content-wrapper">
            <MainContent
              className="main-content"
              navItems={this.state.navItems}
              currentIndex={this.state.currentIndex}
              handleSubNavClick={this.handleSubNavClick}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
