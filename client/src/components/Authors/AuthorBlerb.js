import React, { Component } from "react";

import { connect } from "react-redux";

class AuthorBlerb extends Component {
  render() {
    const data = this.props.author;

    if (typeof data.image === "undefined") {
      return <p>Loading!</p>;
    }

    return (
      <div class="author-blerb">
        <div class="blerb-txt">{data.description}</div>
        <img
          class="blerb-photo"
          src={require(`../../../public/authorImages/${data.image}`)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  author: state.author.author,
});

export default connect(mapStateToProps, {})(AuthorBlerb);
