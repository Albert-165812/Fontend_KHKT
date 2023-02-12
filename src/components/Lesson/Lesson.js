import React from "react";

const Lesson = (id_curr, position_curr, lesson_curr, lesson) => {
  console.log(lesson_curr, id_curr);
  console.log(lesson);
  return (
    <>
      <div className="row g-3" style={{"backgroundColor": "#B9F3FC","padding":"0 0 0 16px"}}>
        <center className="col-sm-3 text-center" style={{"outline": "solid 4px black","borderRadius":"16px","margin":"auto 0"}}>
            <h1 className="fw-bold" style={{"fontSize":"3rem"}}>Bài {position_curr + 1}</h1>
        </center>
        <div className="col-sm-9 text-center">
            <p className="fw-bold" style={{"fontSize":"3rem"}}>{lesson_curr}</p>
        </div>
      </div>
      <div>
        {lesson["Lamquen"].map((lq) => {
          return (
            <div key={lq["text"]}>
              <span>{lq["text"]}</span>
              <span>{lq["img"]}</span>
            </div>
          );
        })}
      </div>
      <div>
        {lesson["Danhvan"].map((dv) => {
          return (
            <div key={dv["text"]}>
              <span>{dv["text"]}</span>
              <span>{dv["img"]}</span>
            </div>
          );
        })}
      </div>
      <div>
        {lesson["Tapdoc"].map((td) => {
          return (
            <div key={td["title"]}>
              <span>{td["title"]}</span>
              <span>{td["content"]}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Lesson;
