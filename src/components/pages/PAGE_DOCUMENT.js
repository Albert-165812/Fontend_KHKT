import React from "react";
import "./Page_document.css";
import Nav from "../layouts/Nav/Nav";
import axios from "axios";
const PAGE_DOCUMENT = () => {
  axios.post("/page_current",{
    "page":"DOCUMENT"
  })
  axios.post("/state_choosen",{
    "state": "don't",
  })
  return (
    <div>
      <Nav />
      <div style={{"padding":"0 0 0 16px"}}>
        <ul style={{"fontSize":"2rem"}}>
          <li>Bảng chữ cái</li>
          <li>Hướng dẫn sử dụng Website</li>
          <li>Hướng dẫn sử dụng phần cứng</li>
          <li>Sách giáo khoa tiếng việt lớp 1 tập 1</li>
          <li>Sách giáo khoa tiếng việt lớp 1 tập 2</li>
        </ul>
      </div>
    </div>
  );
};

export default PAGE_DOCUMENT;
