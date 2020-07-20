import React, { Component } from "react";
import { Container } from "reactstrap";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getArticle } from "../actions/articleActions";
import PropTypes from "prop-types";

class ArticleShow extends Component {
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id);
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
        return data.body;
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

    function checkAndRender(poop) {
      if (typeof data === "undefined") {
        return;
      } else {
        return data.poop;
      }
    }

    return (
      <Container>
        <p>{checkAndRenderName()}</p>
        <p>{checkAndRenderAuthor()}</p>
        <p>{checkAndRenderBody()}</p>
        <p>{checkAndRenderID()}</p>
        <br />
        {/* {this.props.body.split("\r").map((c) => {
          return <p> {c} </p>;
        })} */}
        <br />
        <Link to="/">Back to index</Link>
      </Container>
    );
  }
}

ArticleShow.propTypes = {
  getArticle: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  article: state.article,
});

export default connect(mapStateToProps, { getArticle })(ArticleShow);
