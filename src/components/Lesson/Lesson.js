/* eslint-disable array-callback-return */
import React from "react";
import $ from "jquery"
const Lesson = (lessons, ids_lesson, id_curr) => {
  // console.log(lessons, ids_lesson, id_curr);
  return (
    <>
      {ids_lesson.map((i) => {
        return i["ids"].map((e) => {
          if (e["id"] === id_curr)
            return (
              <div
                key={i["chuong"]}
                className="row g-3"
                style={{ backgroundColor: "#B9F3FC", padding: "0 0 0 16px" }}>
                <center
                  className="col-sm-3 text-center"
                  style={{
                    outline: "solid 4px black",
                    borderRadius: "16px",
                    margin: "auto 0",
                  }}>
                  <h1 className="fw-bold chuong_h1" style={{ fontSize: "3rem" }}>
                    {i["chuong"]}
                  </h1>
                </center>
                <div className="col-sm-9 text-center">
                  <p className="fw-bold baihoc_p" style={{ fontSize: "3rem" }}>
                    {e["baihoc"]}
                  </p>
                </div>
              </div>
            );
        });
      })}
      <div
        className="lesson_main"
        style={{ margin: "8px 0 0 0", height: "100%" }}>
        {lessons.map((chuong) => {
          let ten_chuong = $(".chuong_h1").text()
          let ten_baihoc = $(".baihoc_p").text()
          return chuong["study"].map((baihoc) => {

            console.log(ten_chuong,ten_baihoc)
          });
        })}
      </div>
    </>
  );
};

export default Lesson;
