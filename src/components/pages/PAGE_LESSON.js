import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../layouts/Nav/Nav";
import Lesson from "../Lesson/Lesson";
import "./page_lesson.css";
// import $ from "jquery";
const PAGE_LESSON = () => {
  const [ids, Set_ids] = useState([]);
  const [ids_lesson, Set_ids_ids_lesson] = useState([]);
  const [state_get_data, Set_state_get_data] = useState(false);
  const [state_choosen_lesson, Set_state_choosen_lesson] = useState(false);
  const [id_curr, Set_id_curr] = useState("");
  const [position_curr, Set_position_curr] = useState(0);
  const get_data = async () => {
    let Response = await axios.get("/data");
    let data = await Response.data;
    await Set_ids(data["list_id"]);
    await Set_ids_ids_lesson(data["ids"]);
    return true;
  };
  const choosen_lesson = (id) => {
    Set_id_curr(id);
    Set_state_choosen_lesson(true);
    for (let i = 0; i < ids.length; i++) {
      if (ids[i]["id"] === id) {
        Set_position_curr(i);
      }
    }
  };
  const click_next = () => {
    if (position_curr >= ids.length - 1) {
      Set_position_curr(ids.length - 1);
      Set_id_curr(ids[ids.length - 1]["id"]);
    } else {
      Set_position_curr(position_curr + 1);
      Set_id_curr(ids[position_curr + 1]["id"]);
    }
  };
  const click_prev = () => {
    if (position_curr <= 0) {
      Set_position_curr(0);
      Set_id_curr(ids[0]["id"]);
    } else {
      Set_position_curr(position_curr - 1);
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
      console.log("positioncurr", position_curr, "idcurr", id_curr);
      return (
        <div>
          <Nav />
          <h3> Chọn bài học thôi nào</h3>
          <ul
            className="list_chuong"
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}>
            {ids_lesson.map((i) => {
              return (
                <li key={i["chuong"]}>
                  <span
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      margin: "8px",
                    }}>
                    {i["chuong"]}
                  </span>
                  <ul
                    className="list_baihoc"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignContent: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}>
                    {i["ids"].map((i) => {
                      return (
                        <li key={i["id"]}>
                          <button
                            style={{
                              maxWidth: "200px",
                              width: "maxContent",
                              minWidth: "80px",
                              margin: "4px 8px",
                            }}
                            className="btn btn-primary"
                            onClick={() => {
                              choosen_lesson(i["id"]);
                            }}>
                            <span>{i["baihoc"]}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          <div style={{ height: "max-content", margin: "8px 4px" }}>
            <button
              id="NEXT"
              style={{ margin: "0 4px", padding: "0 4px" }}
              onClick={click_next}>
              Next
            </button>
            <button
              id="PREV"
              style={{ margin: "0 4px", padding: "0 4px" }}
              onClick={click_prev}>
              Prev
            </button>
          </div>
        </div>
      );
    } else {
      // console.log("positioncurr", position_curr, "idcurr", id_curr);
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
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}>
              {ids_lesson.map((i) => {
                return i["ids"].map((e) => {
                  if (e["id"] === id_curr)
                    return (
                      <div
                        key={i["chuong"]}
                        className="row g-3"
                        style={{
                          backgroundColor: "#B9F3FC",
                          padding: "0 0 0 16px",
                        }}>
                        <center
                          className="col-sm-3 text-center"
                          style={{
                            outline: "solid 4px black",
                            borderRadius: "16px",
                            margin: "auto 0",
                          }}>
                          <h1
                            className="fw-bold chuong_h1"
                            style={{ fontSize: "3rem" }}>
                            {i["chuong"]}
                          </h1>
                        </center>
                        <div className="col-sm-9 text-center">
                          <p
                            className="fw-bold baihoc_p"
                            style={{ fontSize: "3rem" }}>
                            {e["baihoc"]}
                          </p>
                        </div>
                      </div>
                    );
                });
              })}
              {Lesson(id_curr)}
            </div>
            <div style={{ height: "max-content", margin: "8px 4px" }}>
              <button
                id="NEXT"
                style={{ margin: "0 4px", padding: "0 4px" }}
                onClick={click_next}>
                Next
              </button>
              <button
                id="PREV"
                style={{ margin: "0 4px", padding: "0 4px" }}
                onClick={click_prev}>
                Prev
              </button>
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
