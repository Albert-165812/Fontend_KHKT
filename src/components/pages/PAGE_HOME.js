// /* eslint-disable react/style-prop-object */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TexttoSpeech } from "../TexttoSpeech/TexttoSpeech";
import { FaSearch, FaFolder, FaBook } from "react-icons/fa";
import "./Page_home.css";
import Nav from "../layouts/Nav/Nav";
const PAGE_HOME = () => {
  useEffect(() => {
    TexttoSpeech("Chào bạn đây là trang chủ");
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Nav />
      <div className="page_home">
        <div className="row g-3" style={{ margin: "5% 0 0 0" }}>
          <div className="col-sm text-center">
            <Link
              className="btn btn-primary button"
              to="/Fontend_KHKT/Page_1"
              role="button"
              style={{ width: "200px", height: "50px" }}
              onClick={() => {
                console.log("this is a page 1");
                TexttoSpeech("Đây là trang 1");
              }}>
              <span
                style={{
                  display: "flex",
                  "fontSize": "2rem",
                  "justifyContent": "center",
                  alignItems: "center",
                }}>
                <h1 className="text-center" style={{ padding: "0 8px 0 0" }}>
                  Nhận diện
                </h1>
                <FaSearch />
              </span>
            </Link>
          </div>
          <div className="col-sm text-center">
            <Link
              className="btn btn-primary"
              to="/Fontend_KHKT/Page_2"
              role="button"
              style={{ width: "200px", height: "50px" }}
              onClick={() => {
                console.log("this is a page 2");
                TexttoSpeech("Đây là trang 2");
              }}>
              <span
                style={{
                  display: "flex",
                  "fontSize": "2rem",
                  "justifyContent": "center",
                  alignItems: "center",
                }}>
                <h1 className="text-center" style={{ padding: "0 8px 0 0" }}>
                  Bài học
                </h1>
                <FaBook />
              </span>
            </Link>
          </div>
          <div className="row g-3" style={{ margin: "0 0 0 0" }}>
            <div className="col-sm text-center">
              <Link
                className="btn btn-primary"
                to="/Fontend_KHKT/"
                role="button"
                style={{ width: "200px", height: "50px" }}>
                <span
                  style={{
                    display: "flex",
                    "fontSize": "2rem",
                    "justifyContent": "center",
                    alignItems: "center",
                  }}>
                  <h1 className="text-center" style={{ padding: "0 8px 0 0" }}>
                    Tài liệu
                  </h1>
                  <FaFolder />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAGE_HOME;
