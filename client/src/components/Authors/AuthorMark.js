import React, { Component } from "react";
import { Container } from "reactstrap";

import { connect } from "react-redux";

class AuthorMark extends Component {
  render() {
    return (
      <Container>
        <p>by {this.props.author.name}</p>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  author: state.author.author,
});

export default connect(mapStateToProps, {})(AuthorMark);
