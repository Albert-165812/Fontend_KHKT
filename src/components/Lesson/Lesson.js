import React, { useEffect, useState } from "react";
import axios from "axios";
import { next, prev, display } from "../handlers/Handle_btn";
import { TexttoSpeech } from "../TexttoSpeech/TexttoSpeech";
import Tapdoc from "./Tapdoc"
import Lamquen from "./Lamquen"
import Timvan from "./Timvan"
const Lesson = () => {
  const [lessons, setLessons] = useState([]);
  const [title, settitle] = useState([]);
  const [lamquen, setlamquen] = useState([]);
  const [tapdoc, settapdoc] = useState([]);
  const [timvan, settimvan] = useState([]);
  const [id_curr, setid_curr] = useState([]);
  const [state, setState] = useState(false);
  // khoi tao data
  useEffect(() => {
    axios
      .get("/ids")
      .then(function (response) {
        setLessons(response.data["lessons"]);
        settitle(response.data["data"]["title"]);
        setlamquen(response.data["data"]["lamquen"]);
        settapdoc(response.data["data"]["tapdoc"]);
        settimvan(response.data["data"]["timvan"]);
        setState(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  if (state) {
    TexttoSpeech("Đã kết nối với dữ liệu trên server thành công, bạn có thể bắt đầu bài học của mình")
    return (
      <div>
        <select name="lessons" id="lessons">
          {lessons.map((lesson) => {
            return (
              <option
                id={lesson["id"]}
                key={lesson["id"]}
                value={lesson["lesson"]}>
                {lesson["lesson"]}
              </option>
            );
          })}
        </select>
        {Tapdoc(tapdoc)}
        {Lamquen(lamquen)}
        {Timvan(timvan)}
      </div>
    );
  }
  else{
    TexttoSpeech("Đang kết nối với dữ liệu trên server")
    return(
      <center>
        <span>
          Đang Kết nối với dữ liệu trên server...
        </span>
      </center>
    )
  }
};

export default Lesson;
