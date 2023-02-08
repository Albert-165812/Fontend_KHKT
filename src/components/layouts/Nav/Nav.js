/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaFolder, FaBook } from "react-icons/fa";
import "./nav.css";
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
              <span
              style={{
                "display": "flex",
                "font-size": "1.6rem",
                "justify-content": "center",
                "alignItems": "center",
                
              }}>
              <h3 className="text-center" style={{ padding: "0 4px 0 0" }}>
                Nhận diện
              </h3>
              <FaSearch />
            </span>
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link className="nav-link" to="/Fontend_KHKT/Page_2">
              <span
              style={{
                "display": "flex",
                "font-size": "1.6rem",
                "justify-content": "center",
                "alignItems": "center",
                
              }}>
              <h3 className="text-center" style={{ padding: "0 4px 0 0" }}>
                Bài học
              </h3>
              <FaBook />
            </span>
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link className="nav-link" to="/Fontend_KHKT/">
              <span
              style={{
                "display": "flex",
                "font-size": "1.6rem",
                "justify-content": "center",
                "alignItems": "center",
                
              }}>
              <h3 className="text-center" style={{ padding: "0 4px 0 0" }}>
                Tài liệu
              </h3>
              <FaFolder />
            </span>
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
