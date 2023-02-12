import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../layouts/Nav/Nav";
import Lesson from "../Lesson/Lesson";
import "./page_lesson.css";

const PAGE_LESSON = () => {
  const [ids, Set_ids] = useState([]);
  const [lessons, Set_lessons] = useState([]);
  const [state_get_data, Set_state_get_data] = useState(false);
  const [state_choosen_lesson, Set_state_choosen_lesson] = useState(false);
  const [lesson_curr,Set_lesson_curr] = useState('');
  const [position_curr, setPosition_curr] = useState(0);
  const get_data = async () => {
    let Response = await axios.get("/data");
    let data = await Response.data;
    await Set_ids(data["ids"]);
    await Set_lessons(data["study"]);
    return true;
  };
  const choosen_lesson = (id) => {
    Set_lesson_curr(id)
    Set_state_choosen_lesson(true);
  };
  const click_next = () => {
    setPosition_curr(position_curr + 1);
    if (position_curr >= ids.length - 1)
      setPosition_curr(ids.length - 1);
  };
  const click_prev = () => {
    setPosition_curr(position_curr - 1);
    if (position_curr <= 0) setPosition_curr(0);
  };
  useEffect(() => {
    get_data()
      .then((ms) => {
        Set_state_get_data(ms);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  if (state_get_data) {
    if (!state_choosen_lesson) {
      return (
        <div>
        <Nav/>
          <h3> Chọn bài học thôi nào</h3>
          <ul>
            {ids.map((id) => {
              return (
                <li key={id["id"]}>
                  <button
                    onClick={() => {
                      choosen_lesson(id["id"]);
                    }}>
                    {id["lesson"]}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <>
          <Nav />
          {Lesson(lesson_curr,ids,lessons,position_curr)}
          <button onClick={click_next}>Next</button>
          <button onClick={click_prev}>Prev</button>
        </>
      );
    }
  } else {
    return (
      <center className="preloading">
        <div id="preload" className="preload-container text-center">
          <span className="glyphicon glyphicon-repeat preload-icon rotating">
            Đang tải dữ liệu bài học
          </span>
        </div>
      </center>
    );
  }
};

export default PAGE_LESSON;
