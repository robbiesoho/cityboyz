import React, { Component } from "react";
import { Container } from "reactstrap";

import { connect } from "react-redux";
import { getArticles, deleteArticle } from "../../actions/articleActions";
import PropTypes from "prop-types";
import ArticlePreview from "./ArticlePreview";
import Hero from "../Hero";

class Articles extends Component {
  componentDidMount() {
    this.props.getArticles();
  }

  onDeleteClick = (id) => {
    this.props.deleteArticle(id);
  };

  render() {
    const { articles } = this.props.article;

    return (
      <Container>
        <Hero />
        <section class="article-previews">
          {articles.map((article) => (
            <li key={article._id} class="article-preview">
              <ArticlePreview {...article} />
            </li>
          ))}
        </section>
      </Container>
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
