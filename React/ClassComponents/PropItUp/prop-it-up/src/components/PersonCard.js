import React, { Component } from 'react';


class PersonCard extends Component {
    render() {
        const { lastName, firstName } = this.props;
        return(
            <div>
                <h1>{lastName}{firstName}</h1>
                <p>{this.props.age}</p>
                <p>{this.props.hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;