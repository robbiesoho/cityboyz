import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

class ArticlePreview extends Component {
  render() {
    const articlePath = {
      pathname: `/article/${this.props._id}`,
    };

    const article = this.props;
    const id = this.props._id;
    return (
      <Container>
        {article.name}
        <br />
        {article.author}
        <br />
        {article._id}
        <br />
        <Link to={articlePath}>link here</Link>
      </Container>
    );
  }
}

export default ArticlePreview;
