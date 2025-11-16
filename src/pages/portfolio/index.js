import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="portfolio-grid mb-5">
          {dataportfolio.map((data, index) => (
            <article key={index} className="portfolio-card">
              <div className="card-media">
                <img src={data.img} alt={data.description} loading="lazy" />
              </div>
              <div className="card-body">
                <p className="card-description">{data.description}</p>
                <a
                  href={data.link || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
