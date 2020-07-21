import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getArticle } from "../actions/articleActions";
import { getAuthor } from "../actions/authorActions";
import PropTypes from "prop-types";

class Article extends Component {
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id);
    if (this.props.article.article) {
      console.log("fuck");
      console.log(this.props.article.article.authorId);
      this.props.getAuthor(this.props.article.article.authorId);
    }
  }

  render() {
    if (this.props.article.loading) {
      return <p>Loading!</p>;
    }

    const data = this.props.article.article;

    function checkAndRenderBody() {
      if (typeof data === "undefined") {
        return;
      } else {
        return data.body.split("\r").map((c) => {
          return <p> {c} </p>;
        });
      }
    }
    function checkAndRenderName() {
      if (typeof data === "undefined") {
        return;
      } else {
        return data.name;
      }
    }
    function checkAndRenderAuthor() {
      if (typeof data === "undefined") {
        return;
      } else {
        return data.author;
      }
    }
    function checkAndRenderID() {
      if (typeof data === "undefined") {
        return;
      } else {
        return data._id;
      }
    }

    return (
      <Container>
        <p>{checkAndRenderName()}</p>
        <p>{checkAndRenderAuthor()}</p>
        <p>{checkAndRenderBody()}</p>
        <p>{checkAndRenderID()}</p>
        <br />

        <Link to="/">Back to index</Link>
      </Container>
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
