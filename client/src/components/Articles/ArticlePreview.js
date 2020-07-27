import React, { Component } from "react";

import { Link } from "react-router-dom";

class ArticlePreview extends Component {
  render() {
    const articlePath = {
      pathname: `/article/${this.props._id}`,
    };

    const article = this.props;

    return (
      <div className="preview-card">
        <Link className="card-name" to={articlePath}>
          {article.name}
        </Link>

        <div className="card-author">by {article.author}</div>

        <div className="card-preview">{article.preview}</div>

        <div className="card-link-container">
          <Link className="card-link" to={articlePath}>
            Read more
          </Link>
        </div>
      </div>
    );
  }
}

export default ArticlePreview;
