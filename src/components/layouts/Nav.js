/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
const Nav = (title) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Fontend_KHKT/">
          <h1>Trang chủ</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item text-center">
              <Link className="nav-link" to="/Fontend_KHKT/Page_1">
                <h4>
                  Nhận diện <span className="glyphicon glyphicon-search"></span>
                </h4>
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link className="nav-link" to="/Fontend_KHKT/Page_2">
                <h4>
                  Bài học
                  <span className="glyphicon glyphicon-education"></span>
                </h4>
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link className="nav-link" to="/Fontend_KHKT/">
                <h4>
                  Tài liệu
                  <span className="glyphicon glyphicon-folder-open"></span>
                </h4>
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
