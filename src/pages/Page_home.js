import React from "react";
import { Link } from "react-router-dom";
import { TexttoSpeech } from "../components/TexttoSpeech";
const Page_home = () => {
  return (
    <div className="page_Home">
      <center>
        <div className="box">
          <button type="button" className="btn btn--home btn-dark">
            <Link
              to="/Page_1"
              onClick={() => {
                console.log("this is a page 1");
                TexttoSpeech("Đây là trang 1")
              }}>      
              Page_1
            </Link>
          </button>
        </div>
        <div className="box">
          <button type="button" className="btn btn--home btn-dark">
            <Link
              to="/Page_2"
              onClick={() => {
                console.log("this is a page 2");
                TexttoSpeech("Đây là trang 2")
              }}>
              Page_2
            </Link>
          </button>
        </div>
      </center>
    </div>
  );
};

export default Page_home;
