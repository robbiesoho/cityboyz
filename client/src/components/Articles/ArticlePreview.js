import React, { Component } from "react";

import { Link } from "react-router-dom";

class ArticlePreview extends Component {
  render() {
    const articlePath = {
      pathname: `/article/${this.props._id}`,
    };

    const article = this.props;

    return (
      <div class="preview-card">
        <Link class="card-name" to={articlePath}>
          {article.name}
        </Link>

        <div class="card-author">by {article.author}</div>

        <div class="card-preview">{article.preview}</div>

        <div class="card-link-container">
          <Link class="card-link" to={articlePath}>
            Read more
          </Link>
        </div>
      </div>
    );
  }
}

export default ArticlePreview;
