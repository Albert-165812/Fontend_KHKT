import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../layouts/Nav/Nav";
import Lesson from "../Lesson/Lesson";
import "./page_lesson.css";
import $ from "jquery" 
const PAGE_LESSON = () => {
  const [ids, Set_ids] = useState([]);
  const [lessons, Set_lessons] = useState([]);
  const [state_get_data, Set_state_get_data] = useState(false);
  const [state_choosen_lesson, Set_state_choosen_lesson] = useState(false);
  const [lesson_curr, Set_lesson_curr] = useState("");
  const [id_curr, Set_id_curr] = useState("");
  const [position_curr, Set_position_curr] = useState(0);
  const get_data = async () => {
    let Response = await axios.get("/data");
    let data = await Response.data;
    await Set_ids(data["ids"]);
    await Set_lessons(data["study"]);
    return true;
  };
  const choosen_lesson = (id) => {
    Set_id_curr(id);
    Set_state_choosen_lesson(true);
    for (let i = 0; i < ids.length; i++) {
      if (ids[i]["id"] === id) {
        Set_position_curr(i);
        Set_lesson_curr(ids[i]["lesson"]);
      }
    }
  };
  const click_next = () => {
    if (position_curr >= ids.length - 1) {
      Set_position_curr(ids.length - 1);
      Set_lesson_curr(ids[ids.length - 1]["lesson"]);
      Set_id_curr(ids[ids.length - 1]["id"]);
    } else {
      Set_position_curr(position_curr + 1);
      Set_lesson_curr(ids[position_curr + 1]["lesson"]);
      Set_id_curr(ids[position_curr + 1]["id"]);
    }
  };
  const click_prev = () => {
    if (position_curr <= 0) {
      Set_position_curr(0);
      Set_lesson_curr(ids[0]["lesson"]);
      Set_id_curr(ids[0]["id"]);
    } else {
      Set_position_curr(position_curr - 1);
      Set_lesson_curr(ids[position_curr - 1]["lesson"]);
      Set_id_curr(ids[position_curr - 1]["id"]);
    }
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
      // console.log(document.getElementById("list_lesson_choosen").childNodes[0].childNodes[0])
      console.log($("#list_lesson_choosen")[0].childNodes[0].childNodes[0])
      return (
        <div>
          <Nav />
          <h3> Chọn bài học thôi nào</h3>
          <ul style={{
            "display":"flex",
            "flexWrap":"wrap"
          }}
          id="list_lesson_choosen">
            {ids.map((id,index) => {
              return (
                <li key={id["id"]}>
                  <button
                  style={{
                    "maxWidth":"200px",
                    "width":"maxContent",
                    "minWidth":"80px",
                    "margin":"4px 8px",

                  }}
                  className = "btn btn-primary"
                    onClick={() => {
                      choosen_lesson(id["id"]);
                    }}>
                    Bài: {index + 1} <br/> {id["lesson"]}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div
          style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ height: "max-content" }}>
            <Nav />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}>
            <div style={{ height: "100%" }}>
              {Lesson(id_curr, position_curr,lesson_curr, lessons[position_curr])}
            </div>
            <div style={{ height: "max-content" ,"margin":"8px 4px"}}>
              <button style={{"margin":"0 4px","padding":"0 4px"}} onClick={click_next}>Next</button>
              <button style={{"margin":"0 4px","padding":"0 4px"}} onClick={click_prev}>Prev</button>
            </div>
          </div>
        </div>
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
