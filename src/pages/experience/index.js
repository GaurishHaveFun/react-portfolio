import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataexperience, meta } from "../../content_option";

export const Experience = () => {
  return (
    <HelmetProvider>
      <Container className="Experience-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Experience | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Experience</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            {dataexperience.map((data, i) => {
              return (
                <div className="experience_item py-4" key={i}>
                  <div className="experience_header">
                    {data.logo && (
                      <div className="experience_logo">
                        <img src={data.logo} alt={`${data.where} logo`} />
                      </div>
                    )}
                    <div>
                      <h5 className="experience_title">{data.jobtitle}</h5>
                      <div className="experience_subtitle">
                        {data.where}
                        {data.location ? ` — ${data.location}` : ""} · {data.date}
                      </div>
                    </div>
                  </div>
                  {data.bullets && data.bullets.length > 0 && (
                    <ul className="experience_bullets">
                      {data.bullets.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
