import React from 'react';
import PropTypes from 'prop-types';

//Changes:
// Can just use currentIndex to identify selected nav
const Navigation = props =>
  <ul>
     {props.navItems.map((item, index) =>
      <li key={index}
        className={(props.currentIndex == index ? 'nav-select' : '')}
        onClick={() => props.handleNavClick(index) }
        >
        <a>{item.name}</a>
      </li>
    )}
  </ul>;

  Navigation.propTypes = {
    navItems: PropTypes.array.isRequired,
    handleNavClick: PropTypes.func.isRequired
  }

  export default Navigation
