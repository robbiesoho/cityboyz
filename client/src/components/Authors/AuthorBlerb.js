import React, { Component } from "react";
import { Container } from "reactstrap";

import { connect } from "react-redux";

class AuthorBlerb extends Component {
  render() {
    return (
      <Container>
        <h1>This is a blerb for {this.props.author.name}</h1>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  author: state.author.author,
});

export default connect(mapStateToProps, {})(AuthorBlerb);
