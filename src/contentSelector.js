import React from 'react';
import PropTypes from 'prop-types';

const ContentSelector = props =>
  <select>
    {props.subItems.map((subItem, index) =>
      <option key={index}>
          {subItem}
      </option>
    )}
  </select>

  ContentSelector.propTypes = {
    subItems: PropTypes.array.isRequired
  }

  export default ContentSelector
