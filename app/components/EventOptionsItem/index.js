/**
*
* EventOptionsItem
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.div`
	font-family: 'Raleway', sans-serif;
	letter-spacing: 2px;
	background: ${props => props.background};
	padding-left: 15px;
	padding-right: 15px;
	padding-top: 25px;
	padding-bottom: 25px;
	color: #f0f0f0;
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	border: 1px solid #f0f0f0;
`;

const Section = styled.span`
	margin-left: 10x;
	margin-right: 10x;
`;

const Input = styled.input`
    background-color:transparent;
    width: 24px;
`;

class EventOptionsItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
  	super(props);
  	this.state = {
  		time: this.props.time,
  	}
  	this.handleChange = this.handleChange.bind(this);
  	this.handleFocus = this.handleFocus.bind(this);
  }

  handleChange(evt) {
  	let newTime = +evt.target.value;
  	if (!Number.isInteger(newTime) || newTime < 1 || newTime > 20) {
  		newTime = 5;
  	}
  	this.setState({time: newTime});
  }

  handleFocus(evt) {
  	evt.target.select();
  }

  render() {
  	const { background, time, title, handleOnClick } = this.props;
    return (
      <Item background={background}>
      	<span> <Input type="text" onFocus={this.handleFocus} value={this.state.time} onChange={this.handleChange} /> min </span>
      	<span> {title} </span>
      	<span> <button onClick={handleOnClick}>+</button> </span>
      </Item>
    );
  }
}

EventOptionsItem.propTypes = {

};

export default EventOptionsItem;
