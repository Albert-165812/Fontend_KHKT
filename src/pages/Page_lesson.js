import React, { useEffect, useState } from "react";
import Nav from "../layouts/Nav";
import axios from "axios";
const Page_lesson = () => {
  const [lessons, setLessons] = useState([]);
  const [title, settitle] = useState([]);
  const [lamquen, setlamquen] = useState([]);
  const [tapdoc, settapdoc] = useState([]);
  const [timvan, settimvan] = useState([]);
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
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="page_lesson">
      {Nav("This is a page lesson")}
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
    </div>
  );
};

export default Page_lesson;
