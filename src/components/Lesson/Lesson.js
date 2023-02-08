import React, { useEffect, useState } from "react";
import axios from "axios";
import "./lesson.css";
const Lesson = () => {
  const [state_get_id, Set_state_get_id] = useState(false);
  const [list_lesson, setList_lesson] = useState([]);
  const [position_curr, setPosition_curr] = useState(0);
  const [list_study,Setlist_study] = useState([])
  const get_data_st = async (id) => {
    let Response = await axios.get("/data");
    let data = await Response.data;
    await Setlist_study(data["study"])
    return "done";
  };
  useEffect(() => {
    if (!state_get_id) {
      const getid = async () => {
        let response = await axios.get("/ids");
        let lessons = await response.data["lessons"];
        return lessons;
      };
      getid()
        .then((data) => {
          setList_lesson(data);
          get_data_st()
            .then((ms) => {
              Set_state_get_id(true);
              console.log(ms);
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [state_get_id]);
  const click_next = () => {
    setPosition_curr(position_curr + 1);
    if (position_curr >= list_lesson.length-1) setPosition_curr(list_lesson.length-1);
  };
  const click_prev = () => {
    setPosition_curr(position_curr - 1);
    if (position_curr <= 0) setPosition_curr(0);
  };
  if (state_get_id) {
    return (
      <div className="content_lesson">
        {console.log(list_lesson[position_curr]["id"])}
        {console.log("sss",list_study[position_curr])}
        <span>id: {list_lesson[position_curr]["id"]}</span>
        <div className="lesson_container">
          <div className="box_lq">
            <span>làm quen</span>
            {list_study[position_curr]["Lamquen"].map((a) => {
              return (
                <div key={a.text}>
                {console.log("zxcvbn")}
                  <div>{a.text}</div>
                  <div>{a.img}</div>
                </div>
              );
            })}
          </div>
        </div>
        <button onClick={click_next}>Next</button>
        <button onClick={click_prev}>Prev</button>
      </div>
    );
  } else {
    return (
      <center>
        <span>Đang load data</span>
      </center>
    );
  }
};

export default Lesson;
