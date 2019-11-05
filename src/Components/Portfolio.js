import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />

        <h1>Team Members</h1>

        <Container>
          <Row>
            <Col sm={4}>
              <div className="ImageDiv">
                <img className="TeamImage" src={require('../Images/nazeer.jpg')} />
                <h3 className="NameText">Nazeer Ahmed</h3>
                <h6 className="TypeText">Front & Back-End Developer</h6>
              </div>
            </Col>
            <Col sm={4}>
              <div className="ImageDiv">
                <img className="TeamImage" src={require('../Images/zubair.jpg')} />
                <h3 className="NameText">M. Zubair Abdullah</h3>
                <h6 className="TypeText">Full Stack Developer</h6>
              </div>
            </Col>
            <Col sm={4}>
              <div className="ImageDiv">
                <img className="TeamImage" src={require('../Images/mustafa.jpg')} />
                <h3 className="NameText">Mustafa</h3>
                <h6 className="TypeText">UI/UX Designer</h6>
              </div>
            </Col>
          </Row>
        </Container>;
      </section>
    );
  }
}

export default Portfolio;
