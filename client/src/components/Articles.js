import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { connect } from "react-redux";
import { getArticles, deleteArticle } from "../actions/articleActions";
import PropTypes from "prop-types";
import ArticlePreview from "./ArticlePreview";

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
        <ListGroup>
          <TransitionGroup className="article-list">
            {articles.map((article) => (
              <CSSTransition key={article._id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <ArticlePreview {...article} />
                  <br />
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>

        {/* {this.props.article.articles.length > 0 && <Article id={"0"} />} */}
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
