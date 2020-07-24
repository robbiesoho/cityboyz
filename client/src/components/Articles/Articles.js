import React, { Component } from "react";

import { connect } from "react-redux";
import { getArticles, deleteArticle } from "../../actions/articleActions";
import PropTypes from "prop-types";
import ArticlePreview from "./ArticlePreview";
import Hero from "../Hero";
import Featured from "../Featured";

class Articles extends Component {
  componentDidMount() {
    this.props.getArticles();
  }

  onDeleteClick = (id) => {
    this.props.deleteArticle(id);
  };

  render() {
    const { articles } = this.props.article;
    const featuredArticle = this.props.article.articles[0];
    return (
      <div id="articles-container">
        <Hero />
        <Featured article={featuredArticle} />
        <section className="article-previews">
          <h1 id="article-previews-title"> Articles </h1>
          {articles.map((article) => (
            <li key={article._id} className="article-preview">
              <ArticlePreview {...article} />
            </li>
          ))}
        </section>
      </div>
    );
  }
}

Articles.propTypes = {
  getArticles: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  article: state.article,
});

export default connect(mapStateToProps, { getArticles, deleteArticle })(
  Articles
);
