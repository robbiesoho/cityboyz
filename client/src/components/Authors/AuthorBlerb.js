import React, { Component } from "react";

import { connect } from "react-redux";

class AuthorBlerb extends Component {
  render() {
    const image = this.props.author.image;

    if (typeof image === "undefined") {
      return <p>Loading!</p>;
    }

    return (
      <div class="author-blerb">
        <div class="blerb-txt">{this.props.author.description}</div>
        <img
          class="blerb-photo"
          src={require(`../../../public/authorImages/${image}`)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  author: state.author.author,
});

export default connect(mapStateToProps, {})(AuthorBlerb);
