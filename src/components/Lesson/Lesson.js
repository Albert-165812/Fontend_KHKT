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
        Box làm quen
      </div>
      `);
      var boxDanhvan = $(`
      <div style="padding:6px" class="box_item_display" id="item_Danhvan">
        Box Dánh vần
      </div>
      `);
      var boxKechuyen = $(`
      <div style="padding:6px" class="box_item_display" id="item_Kechuyen">
        Box Kể chuyện
      </div>
      `);
      var boxOntap = $(`
      <div style="padding:6px" class="box_item_display" id="item_Ontap">
        Box Ôn tập
      </div>
      `);
      if (Lamquen) {
        $("#item_Lamquen").remove();
        $(boxLamquen).appendTo("#box_display_lesson");
        Lamquen.map((i,index)=>{
          var Lamquen = (
            `
            <div class="element_lamquen">
              <span>1</span>
              <img src="2"/>
            </div>
            `
            )
            $("#item_Lamquen").append(Lamquen)
            console.log($(".element_lamquen")[index].childNodes[1])
        })
      } else {
        $("#item_Lamquen").remove();
      }
      if (Danhvan) {
        $("#item_Danhvan").remove();
        $(boxDanhvan).appendTo("#box_display_lesson");
      } else {
        $("#item_Danhvan").remove();
      }
      if (Kechuyen) {
        $("#item_Kechuyen").remove();
        $(boxKechuyen).appendTo("#box_display_lesson");
      } else {
        $("#item_Kechuyen").remove();
      }
      if (Ontap) {
        $("#item_Ontap").remove();
        $(boxOntap).appendTo("#box_display_lesson");
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
