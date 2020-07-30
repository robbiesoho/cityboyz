import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getArticle } from "../../actions/articleActions";
import { getAuthor } from "../../actions/authorActions";
import PropTypes from "prop-types";
import AuthorBlerb from "../Authors/AuthorBlerb";
import AuthorMark from "../Authors/AuthorMark";
import Footer from "../Footer";

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

    console.log(this.props);
    if (typeof data === "undefined") {
      return (
        <p className="loading">
          City Boyz is loading! If you can read this, refresh your page
        </p>
      );
    }

    return (
      <div className="article-container">
        <div className="article-header">
          <Link className="arthead-link" to="/">
            City Boyz home
          </Link>
        </div>

        <p className="aritcle-name">{data.name}</p>
        <p className="aritcle-preview">{data.preview}</p>
        <AuthorMark />
        <article className="aritcle-body">
          {data.body.split("\r").map((c) => {
            return <p className="article-paragraph"> {c} </p>;
          })}
        </article>
        <div className="article-separator"></div>
        <AuthorBlerb />
        <Footer />
      </div>
    );
  }
}

Article.propTypes = {
  getArticle: PropTypes.func.isRequired,
  getAuthor: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  console.log("My store state ===>", state); // log the `state` and see the exact path for articles
  return {
    article: state.article.articles,
  };
};
// const mapStateToProps = (state) => ({
//   article: state.article,
// });

export default connect(mapStateToProps, { getArticle, getAuthor })(Article);
