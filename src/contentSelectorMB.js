import React from 'react';
import PropTypes from 'prop-types';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'mdbreact';
class DropdownPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { dropdownOpen: false };

    DropdownPage.propTypes = {
      handleSubNavClick: PropTypes.func.isRequired
    }
  }

  toggle() {
    this.setState({dropdownOpen: !this.state.dropdownOpen});
  }

  render() {
    let subItems = this.props.currentNav.subContent.subContentOptions;
    let selectedSub = this.props.currentNav.selectedSub;
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="amber">
          {subItems[selectedSub]}
        </DropdownToggle>
        <DropdownMenu>
          {
            subItems.map((subItem, index) =>
            <DropdownItem key={index} color="black" onClick={() => this.props.handleSubNavClick(index)}>
              {subItem}
            </DropdownItem>)
          }
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropdownPage;
