import React, { Component } from "react";

import { Link } from "react-router-dom";

class ArticlePreview extends Component {
  render() {
    const articlePath = {
      pathname: `/article/${this.props._id}`,
    };

    const article = this.props;

    return (
      <div>
        {article.name}
        <br />
        {article.author}
        <br />
        {article._id}
        <br />
        <Link to={articlePath}>link here</Link>
      </div>
    );
  }
}

export default ArticlePreview;
