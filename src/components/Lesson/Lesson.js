/* eslint-disable array-callback-return */
import React from "react";
import axios from "axios";
import $ from "jquery";
import "./lesson.css"
const Lesson = (id_curr) => {
  console.log("ddd", id_curr);
  axios({
    method: "post",
    url: "/data_lesson",
    dataType:'jsonp',
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
      // console.log(Danhvan, Lamquen, Kechuyen, Ontap);

      var boxLamquen = $(`
      <div id="box_item_lamquen">
        <h3 style="font-size:rem;font-weight:boid;width:100%;display:flex;align-items:center;justify-content:center">Làm quen</h3>
        <div style="padding:6px;width:100%;max-width:860px;height:100%;display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap" class="box_item_display" id="item_Lamquen">
        </div>
      </div>
      `);
      var boxDanhvan = $(`
      <div id="box_item_danhvan">
        <h3 style="font-size:rem;font-weight:boid;width:100%;display:flex;align-items:center;justify-content:center">Dánh vần</h3>
        <div style="padding:6px;width:100%;max-width:860px;height:100%;display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap" class="box_item_display" id="item_Danhvan">
        </div>
      </div>
      `);
      var boxKechuyen = $(`
      <div id="box_item_kechuyen" style="padding: 8px 0"> 
        <h3 style="font-size:rem;font-weight:boid;width:100%;display:flex;align-items:center;justify-content:center">Kể chuyện</h3>
        <div style="padding:6px;width:100%;max-width:860px;height:100%;display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap" class="box_item_display" id="item_Kechuyen">
        </div>
      </div>
      `);
      var boxOntap = $(`
      <div id="box_item_ontap">
        <h3 style="font-size:rem;font-weight:boid;width:100%;display:flex;align-items:center;justify-content:center">Ôn tập</h3> 
        <div style="width:100%;max-width:860px;height:100%;display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap" class="box_item_display" id="item_Ontap">
        </div>
      </div>
      `);
      if (Lamquen) {
        $("#box_item_lamquen").remove();
        $(boxLamquen).appendTo("#box_display_lesson");
        Lamquen.map((i, index) => {
          var Lamquen = `
            <div class="element_lamquen" style="padding:4px">
              <img class="element_lamquen-img" style="width:160px; object-fit:center;height:100px" src=""/>
              <span class="element_lamquen-text" style="width:100%;display:flex;justify-content:center;align-items:center;font-size:1.6rem" ></span>
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
        $("#box_item_lamquen").remove();
      }
      if (Danhvan) {
        $("#box_item_danhvan").remove();
        $(boxDanhvan).appendTo("#box_display_lesson");
        Danhvan.map((i, index) => {
          var Danhvan = `
            <div class="element_Danhvan" style="padding:4px">
              <img class="element_Danhvan-img" style="width:160px; object-fit:center;height:100px" src=""/>
              <span class="element_Danhvan-text" style="width:100%;display:flex;justify-content:center;align-items:center;font-size:1.6rem" ></span>
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
        $("#box_item_danhvan").remove();
      }
      if (Kechuyen) {
        $("#box_item_kechuyen").remove();
        $(boxKechuyen).appendTo("#box_display_lesson");
        Kechuyen.map((i, index) => {
          console.log(i);
          var Kechuyen = `
            <div class="element_Kechuyen" style="padding:4px">
              <span class="element_Kechuyen-title" style="width:100%; display:flex;align-items:center;justify-content:center;font-weight:600; font-size:2rem; margin:0;padding:4px 0 0 0"></span>
              <ul id="element_Kechuyen-contentList" style="display:grid;grid-template-columns: 200px 200px"></ul>
            </div>
            `;
          $("#item_Kechuyen").append(Kechuyen);
          document.getElementsByClassName("element_Kechuyen-title")[
            index
          ].innerHTML = i["title"];
          i["content"].map((e, index) => {  
            var content_kechuyen = `
              <li class="element_Kechuyen-contentItem" style="padding:4px">
                <img class="element_Kechuyen-img" style="width:160px; object-fit:center;height:100px" src=""/>
                <span class="element_Kechuyen-text" style="width:100%;display:flex;justify-content:center;align-items:center;font-size:1.6rem" ></span>
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
        $("#box_item_kechuyen").remove();
      }
      if (Ontap) {
        $("#box_item_ontap").remove();
        $(boxOntap).appendTo("#box_display_lesson");
        Ontap.map((i, index) => {
          var Ontap = `
          <div class="element_Ontap" style="padding:4px">
            <span class="element_Ontap-baihoc"style="width:100%;display:flex;justify-content:center;align-items:center;font-size:1.6rem"></span>
            <img class="element_Ontap-img" style="width:160px; object-fit:center;height:100px" src=""/>
            <span class="element_Ontap-noidung"style="width:100%;display:flex;justify-content:center;align-items:center;font-size:1.6rem"></span>
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
        $("#box_item_ontap").remove();
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
      }}>
      </div>
  );
};

export default Lesson;
