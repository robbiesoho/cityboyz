import React, { Component } from "react";

import { connect } from "react-redux";

class AuthorMark extends Component {
  render() {
    return (
      <div class="author-mark">
        <p class="aritcle-author">by {this.props.author.name}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  author: state.author.author,
});

export default connect(mapStateToProps, {})(AuthorMark);
