import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getArticle } from "../../actions/articleActions";
import { getAuthor } from "../../actions/authorActions";
import PropTypes from "prop-types";
import AuthorBlerb from "../Authors/AuthorBlerb";
import AuthorMark from "../Authors/AuthorMark";

class Article extends Component {
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id);
  }

  componentDidUpdate() {
    if (this.props.article.article) {
      this.props.getAuthor(this.props.article.article.authorId);
    }
  }

  render() {
    const data = this.props.article.article;

    if (typeof data === "undefined") {
      return <p>Loading!</p>;
    }

    return (
      <div class="article-container">
        <div class="article-header"></div>

        <p class="aritcle-name">{data.name}</p>
        <p class="aritcle-preview">{data.preview}</p>
        <AuthorMark />
        <p class="aritcle-body">
          {data.body.split("\r").map((c) => {
            return <p class="article-paragraph"> {c} </p>;
          })}
        </p>
        <div class="article-separator"></div>
        <AuthorBlerb />
        <Link to="/" class="index-return-link">
          Go Home
        </Link>
      </div>
    );
  }
}

Article.propTypes = {
  getArticle: PropTypes.func.isRequired,
  getAuthor: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  article: state.article,
});

export default connect(mapStateToProps, { getArticle, getAuthor })(Article);
