/* eslint-disable array-callback-return */
import React from "react";
import axios from "axios";
import $ from "jquery";
const Lesson = (id_curr) => {
  console.log("ddd", id_curr);
  axios({
    method: "post",
    url: "/data_lesson",
    data: {
      id: id_curr,
    },
  })
    .then(function (response) {
      var Danhvan = response.data["study"]["Danhvan"]["Danhvan"];
      var Lamquen = response.data["study"]["Lamquen"]["Lamquen"];
      var Kechuyen = response.data["study"]["Kechuyen"]["Kechuyen"];
      var Ontap = response.data["study"]["Ontap"]["Ontap"];
      let state_Danhvan = true;
      let state_Lamquen = true;
      let state_Kechuyen = true;
      let state_Ontap = true;
      if (Lamquen == null) {
        state_Lamquen = false;
      }
      if (Danhvan == null) {
        state_Danhvan = false;
      }
      if (Kechuyen == null) {
        state_Kechuyen = false;
      }
      if (Ontap == null) {
        state_Ontap = false;
      }
      console.log(state_Danhvan, state_Lamquen, state_Kechuyen, state_Ontap);
      console.log(Danhvan, Lamquen, Kechuyen, Ontap);

      var boxLamquen = $(`
      <div style="padding:6px" class="box_item_display" id="item_Lamquen">
        <h3 style="font-size:1.6rem,font-weight:boid">Box làm quen</h3>
      </div>
      `);
      var boxDanhvan = $(`
      <div style="padding:6px" class="box_item_display" id="item_Danhvan">
        <h3 style="font-size:1.6rem,font-weight:boid">Box Dánh vần</h3>
      </div>
      `);
      var boxKechuyen = $(`
      <div style="padding:6px" class="box_item_display" id="item_Kechuyen">
        <h3 style="font-size:1.6rem,font-weight:boid">Box Kể chuyện</h3>
      </div>
      `);
      var boxOntap = $(`
      <div style="padding:6px" class="box_item_display" id="item_Ontap">
        <h3 style="font-size:1.6rem,font-weight:boid">Box Ôn tập</h3>
      </div>
      `);
      if (Lamquen) {
        $("#item_Lamquen").remove();
        $(boxLamquen).appendTo("#box_display_lesson");
        Lamquen.map((i, index) => {
          var Lamquen = `
            <div class="element_lamquen">
              <span class="element_lamquen-text" ></span>
              <img class="element_lamquen-img" src=""/>
            </div>
            `;
          $("#item_Lamquen").append(Lamquen);
          document.getElementsByClassName("element_lamquen-text")[
            index
          ].innerHTML = i["text"];
          document.getElementsByClassName("element_lamquen-img")[index].src =
            i["img"];
        });
      } else {
        $("#item_Lamquen").remove();
      }
      if (Danhvan) {
        $("#item_Danhvan").remove();
        $(boxDanhvan).appendTo("#box_display_lesson");
        Danhvan.map((i, index) => {
          var Danhvan = `
            <div class="element_Danhvan">
              <span class="element_Danhvan-text" ></span>
              <img class="element_Danhvan-img" src=""/>
            </div>
            `;
          $("#item_Danhvan").append(Danhvan);
          document.getElementsByClassName("element_Danhvan-text")[
            index
          ].innerHTML = i["text"];
          document.getElementsByClassName("element_Danhvan-img")[index].src =
            i["img"];
        });
      } else {
        $("#item_Danhvan").remove();
      }
      if (Kechuyen) {
        $("#item_Kechuyen").remove();
        $(boxKechuyen).appendTo("#box_display_lesson");
        Kechuyen.map((i, index) => {
          console.log(i);
          var Kechuyen = `
            <div class="element_Kechuyen">
              <span class="element_Kechuyen-title" ></span>
              <ul id="element_Kechuyen-contentList"></ul>
            </div>
            `;
          $("#item_Kechuyen").append(Kechuyen);
          document.getElementsByClassName("element_Kechuyen-title")[
            index
          ].innerHTML = i["title"];
          i["content"].map((e, index) => {
            var content_kechuyen = `
              <li class="element_Kechuyen-contentItem">
                <span class="element_Kechuyen-text" ></span>
                <img class="element_Kechuyen-img" src=""/>
              </li>
              `;
            $("#element_Kechuyen-contentList").append(content_kechuyen);
            document.getElementsByClassName("element_Kechuyen-text")[
              index
            ].innerHTML = e["text"];
            document.getElementsByClassName("element_Kechuyen-img")[index].src =
              e["img"];
          });
        });
      } else {
        $("#item_Kechuyen").remove();
      }
      if (Ontap) {
        $("#item_Ontap").remove();
        $(boxOntap).appendTo("#box_display_lesson");
        Ontap.map((i, index) => {
          var Ontap = `
          <div class="element_Ontap">
            <span class="element_Ontap-baihoc"></span>
            <span class="element_Ontap-noidung"></span>
            <img class="element_Ontap-img" src=""/>
          </div>
          `;
          $("#item_Ontap").append(Ontap);
          document.getElementsByClassName("element_Ontap-baihoc")[
            index
          ].innerHTML = i["ten_bai_hoc"];
          document.getElementsByClassName("element_Ontap-noidung")[
            index
          ].innerHTML = i["chu_cua_hinh"];
          document.getElementsByClassName("element_Ontap-img")[index].src =
            i["img"];
        });
      } else {
        $("#item_Ontap").remove();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div
      id="box_display_lesson"
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      }}></div>
  );
};

export default Lesson;
