import React, { Component } from "react";

import { connect } from "react-redux";

class AuthorMark extends Component {
  render() {
    const data = this.props.author;

    if (typeof data.image === "undefined") {
      return <p>Loading!</p>;
    }

    return (
      <div className="author-mark">
        <p className="aritcle-author">{data.name}</p>
        <img
          className="aritcle-mark-photo"
          src={require(`../../../public/authorImages/${data.image}`)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  author: state.author.author,
});

export default connect(mapStateToProps, {})(AuthorMark);
