import React, { useEffect, useState } from "react";
import axios from "axios";
import { next, prev, display } from "../handlers/Handle_btn";
import $ from 'jquery';
const Lesson = () => {
  const [lessons, setLessons] = useState([]);
  const [title, settitle] = useState([]);
  const [lamquen, setlamquen] = useState([]);
  const [tapdoc, settapdoc] = useState([]);
  const [timvan, settimvan] = useState([]);
  const [id_curr, setid_curr] = useState([]);
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
  var btn = ()=>(
    <ul>
      <li>
        <button onClick={console.log("next")}>Next</button>
      </li>
      <li>
        <button onClick={console.log("prev")}>Prev</button>
      </li>
    </ul>)
  console.log($("lessons").value);
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
      <div>
        <span>Làm quen</span>
        {lamquen.map((index) => {
          return (
            <div key={index["text"]}>
              <span>{index["text"]}</span>
              <span>
                {/* <image src={index["img"]}></image> */}
                <span>: {index["img"]}</span>
              </span>
            </div>
          );
        })}
      </div>
      <div>
        <span>Tập đọc</span>
        <div>
          {tapdoc.map((index) => {
            return (
              <div key={index}>
                <span>{index["title"]}</span>
                <span>
                  <p>{index["content"]}</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <span>Tìm Vần</span>
        <div>
          {timvan.map((index) => {
            return (
              <div key={index}>
                <span>{index["title"]}</span>
                <span>
                  {index["container"].map((index) => {
                    return (
                      <div key={index}>
                        <span>{index["content"]}</span>
                        <span>{index["img"]}</span>
                      </div>
                    );
                  })}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {btn()}
    </div>
  );
};

export default Lesson;
