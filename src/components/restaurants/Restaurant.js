import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'


class Restaurant extends Component {


  render() {


    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={() => this.props.delete(this.props.restaurant.id)}> DELETE </button> <br />
          < ReviewsContainer restaurant={this.props.restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant
