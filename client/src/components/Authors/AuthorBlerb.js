import React, { Component } from "react";
import { Container } from "reactstrap";

import { connect } from "react-redux";
// import { getAuthor } from ".../actions/authorActions";
import PropTypes from "prop-types";

class AuthorBlerb extends Component {
  componentDidMount() {
    // this.props.getAuthor(this.props.match.params.id);
  }

  render() {
    console.log("BERB PROPS");
    console.log(this.props.authorId);
    return (
      <Container>
        <h1>This is a blerb</h1>
      </Container>
    );
  }
}

AuthorBlerb.propTypes = {
  getAuthor: PropTypes.func.isRequired,
  author: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  console.log("My BERB store state ===>", state); // log the `state` and see the exact path for articles
  return {
    author: state.article,
  };
};

export default connect(mapStateToProps, {})(AuthorBlerb);
