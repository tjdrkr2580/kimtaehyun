import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const error = () => {
  return (
    <section className="error-wrapper">
      <Helmet title="TaeH | Page not found" />
      <h1 className="error-title">404 | error</h1>
      <p className="error-desc`">해당 페이지를 찾을 수 없습니다.</p>
      <Link to="/greeting">
        <h3>돌아가기</h3>
      </Link>
    </section>
  );
};

export default error;
