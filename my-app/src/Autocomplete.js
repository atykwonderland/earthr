import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Autocomplete.css';
import { Link,Redirect } from 'react-router-dom'

export class Autocomplete extends Component {
  static propTypes =
  {
    options: PropTypes.instanceOf(Array).isRequired,
    redirect: false
  };


  //
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ''
  };

  
//when you start typing, you feed your input into this.props and e.currentTarget.value, and optionName
  onChange = (e) =>
  {
    console.log('onChanges');

    const { options } = this.props;
    const userInput = e.currentTarget.value;
    // Filter our suggestions that don't contain the user's input
    const fs = options.filter(
      suggestion =>
        suggestion.product_name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    const filteredOptions = Array.from(new Set( fs.map(
        suggestion =>
            suggestion
    )))
    

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };


  onClick = (e) =>
  {
    this.setState(
      {
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };

  //when the use starts typing into the box, enters this
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption] //take first option
      });

    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {

    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput }
    } = this;
    let optionList;


    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={optionName.product_name} >
                  {optionName.product_name}
                  <Link to={{pathname: '/result',
                    state: {
                      data: optionName
                    }}} >
                                Select
                  </Link>

                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }


    return (
      <React.Fragment>
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          <input type="submit" value="" className="search-btn" />
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

export default Autocomplete;
