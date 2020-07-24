import React, { Component } from "react";
import { Link } from "react-router-dom";

class Featured extends Component {
  render() {
    const data = this.props.article;

    if (typeof data === "undefined") {
      return <p>Loading!</p>;
    }

    return (
      <div id="featured">
        <div id="featured-title">Featured article</div>
        <div id="featured-details">
          <Link id="featured-name" to={"/article/" + data._id}>
            {data.name}
          </Link>
          <div id="featured-author">by {data.author}</div>
          <div id="featured-preview">{data.preview}</div>
        </div>
      </div>
    );
  }
}
export default Featured;
