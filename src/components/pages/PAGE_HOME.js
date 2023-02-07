import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TexttoSpeech } from "../TexttoSpeech/TexttoSpeech";
import "./Page_home.css";
const PAGE_HOME = () => {
  useEffect(() => {
    TexttoSpeech("Chào bạn đây là trang chủ");
  }, []);
  return (
    <div className="page_home">
      <div className="box">
        <Link
          to="/Fontend_KHKT/Page_1"
          onClick={() => {
            console.log("this is a page 1");
            TexttoSpeech("Đây là trang 1");
          }}>
          <button type="button" className="btn btn--home btn_page-home">
            Page_1
          </button>
        </Link>
      </div>
      <div className="box">
        <Link
          to="/Fontend_KHKT/Page_2"
          onClick={() => {
            console.log("this is a page 2");
            TexttoSpeech("Đây là trang 2");
          }}>
          <button type="button" className="btn btn--home btn_page-home">
            Page_2
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PAGE_HOME;
