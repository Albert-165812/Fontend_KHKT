import $, { post } from "jquery";
import axios from "axios";
import {TexttoSpeech} from "../TexttoSpeech/TexttoSpeech"
var count_next = 0;
var count_text = 0;
let state_choosen_lesson = false;
let list_text;
let list_text_lamquen;
let list_text_danhvan;
let list_text_kechuyen;
let list_text_ontap;
const push_list_text = () => {
  list_text = [];
  list_text_lamquen = ["Làm quen"];
  list_text_danhvan = ["Đánh vần"];
  list_text_kechuyen = ["Kể chuyện"];
  list_text_ontap = ["Ôn tập"];
  for (let i = 0; i < $("#box_display_lesson")[0].childNodes.length; i++) {
    switch ($("#box_display_lesson")[0].childNodes[i].id) {
      case "box_item_lamquen":
        for (
          let e = 0;
          e <
          $("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes
            .length;
          e++
        ) {
          if (
            $("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[
              e
            ].nodeName === "DIV"
          ) {
            list_text_lamquen.push(
              $("#box_display_lesson")[0].childNodes[i].childNodes[3]
                .childNodes[e].childNodes[3].textContent
            );
          }
        }
        break;
      case "box_item_danhvan":
        for (
          let e = 0;
          e <
          $("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes
            .length;
          e++
        ) {
          if (
            $("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[
              e
            ].nodeName === "DIV"
          ) {
            list_text_danhvan.push({
              text: $("#box_display_lesson")[0].childNodes[i].childNodes[3]
                .childNodes[e].childNodes[3].textContent,
              danhvan: $("#box_display_lesson")[0].childNodes[i].childNodes[3]
                .childNodes[e].childNodes[3].title,
            });
          }
        }
        break;
      case "box_item_kechuyen":
        list_text_kechuyen.push(
          $("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[2]
            .childNodes[1].textContent
        );
        for (
          var e = 0;
          e <
          $("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[2]
            .childNodes[3].childNodes.length;
          e++
        ) {
          if (
            $("#box_display_lesson")[0].childNodes[i].childNodes[3]
              .childNodes[2].childNodes[3].childNodes[e].nodeName === "LI"
          ) {
            list_text_kechuyen.push(
              $("#box_display_lesson")[0].childNodes[i].childNodes[3]
                .childNodes[2].childNodes[3].childNodes[e].childNodes[3]
                .textContent
            );
          }
        }
        break;
      case "box_item_ontap":
        for (
          let e = 0;
          e <
          $("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes
            .length;
          e++
        ) {
          if (
            $("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[
              e
            ].nodeName === "DIV"
          ) {
            list_text_ontap.push({
              name: $("#box_display_lesson")[0].childNodes[i].childNodes[3]
                .childNodes[e].childNodes[1].textContent,
              text: $("#box_display_lesson")[0].childNodes[i].childNodes[3]
                .childNodes[e].childNodes[5].textContent,
            });
          }
        }
        break;
      default:
        break;
    }
  }
  // list_text.push(...list_text_lamquen)
  // list_text.push(...list_text_danhvan)
  // list_text.push(...list_text_kechuyen)
  // list_text.push(...list_text_ontap)
  if(list_text_lamquen.length>1) list_text = list_text.concat(list_text_lamquen)
  if(list_text_danhvan.length>1) list_text = list_text.concat(list_text_danhvan)
  if(list_text_kechuyen.length>1) list_text = list_text.concat(list_text_kechuyen)
  if(list_text_ontap.length>1) list_text = list_text.concat(list_text_ontap)
  return list_text;
};
export const HandleSocket = (msg, socket, ids) => {
  switch (msg["place"]) {
    case "HOME":
      switch (msg["task"]) {
        case "controlLinkWeb":
          switch (msg["content"]) {
            case "DETECT":
              window.location.replace("/Fontend_KHKT/Page_1");
              break;
            case "LESSONS":
              window.location.replace("/Fontend_KHKT/Page_2");
              break;
            case "DOCUMENT":
              window.location.replace("/Fontend_KHKT/Page_3");
              break;
            case "BACK":
              window.location.reload();
              break;
            default:
          }
          break;
        default:
      }
      break;
    case "DETECT":
      switch (msg["task"]) {
        case "controlLinkWeb":
          switch (msg["content"]) {
            case "DETECT":
              window.location.reload();
              break;
            case "LESSONS":
              window.location.replace("/Fontend_KHKT/Page_2");
              break;
            case "DOCUMENT":
              window.location.replace("/Fontend_KHKT/Page_3");
              break;
            case "BACK":
              window.location.replace("/Fontend_KHKT/");
              break;
            default:
          }
          break;
        default:
      }
      break;
    case "LESSONS":
      if (!state_choosen_lesson) {
        switch (msg["task"]) {
          case "controlChooseLessons":
            switch (msg["content"]) {
              case "NEXTCHOOSE":
                if (count_next >= ids[0].length - 1) {
                  count_next = ids[0].length - 1;
                } else {
                  count_next += 1;
                }
                console.log(count_next);
                break;
              case "PREVCHOOSE":
                if (count_next === 0) {
                  count_next = 0;
                } else count_next -= 1;
                break;
              case "CHOOSE":
                $(".btn_choose_lessons")[count_next].childNodes[0].click();
                state_choosen_lesson = true;
                axios.post("/state_choosen", {
                  state: "done",
                });
                count_next = 0;
                break;
              default:
                break;
            }
            break;
          case "controlLinkWeb":
            switch (msg["content"]) {
              case "DETECT":
                window.location.replace("/Fontend_KHKT/Page_1");
                break;
              case "LESSONS":
                window.location.reload();
                break;
              case "DOCUMENT":
                window.location.replace("/Fontend_KHKT/Page_3");
                break;
              case "BACK":
                window.location.replace("/Fontend_KHKT/");
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
      } else {
        switch (msg["task"]) {
          case "controlLesson":
            switch (msg["content"]) {
              case "NEXT":
                $("#NEXT")[0].click();
                count_text =0;
                break;
              case "PREV":
                $("#PREV")[0].click();
                count_text = 0;
                break;
              case "NEXT_TEXT":
                console.log("NEXT_TEXT");
                break;
              case "PREV_TEXT":
                console.log("PREV_TEXT");
                var arr_speech = push_list_text();
                if(count_text >= arr_speech.length-1) count_text = arr_speech.length-1
                count_text++;
                console.log(arr_speech[count_text-1]);
                TexttoSpeech(arr_speech[count_text-1])
                if(arr_speech[count_text-1] !== arr_speech[0])
                axios.post("/change_Text",{ 
                  "text": arr_speech[count_text-1]
                })
                break;
              default:
                break;
            }
            break;
          case "controlLinkWeb":
            switch (msg["content"]) {
              case "DETECT":
                window.location.replace("/Fontend_KHKT/Page_1");
                count_text = 0;
                break;
              case "LESSONS":
                window.location.reload();
                count_text = 0;
                break;
              case "DOCUMENT":
                window.location.replace("/Fontend_KHKT/Page_3");
                count_text = 0;
                break;
              case "BACK":
                window.location.replace("/Fontend_KHKT/");
                count_text = 0;
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
      }
      break;
    case "DOCUMENT":
      break;
    default:
      console.log("no found");
      break;
  }
};
