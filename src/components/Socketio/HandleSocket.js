import $ from "jquery";
import axios from "axios";
var count_next = 0;
let state_choosen_lesson = false;
let list_text = [];
let list_text_lamquen
let list_text_danhvan
let list_text_kechuyen
let list_text_ontap
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
                break;
              case "PREV":
                $("#PREV")[0].click();
                break;
              case "NEXT_TEXT":
                console.log("NEXT_TEXT");
                break;
              case "PREV_TEXT":
                console.log("PREV_TEXT");
                list_text_lamquen = [];
                list_text_danhvan = [];
                list_text_kechuyen = [];
                list_text_ontap = [];
                for (
                  let i = 0;
                  i < $("#box_display_lesson")[0].childNodes.length;
                  i++
                ) {
                  switch ($("#box_display_lesson")[0].childNodes[i].id) {
                    case "box_item_lamquen":
                      for(let e =0;e<$("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes.length;e++){
                        if($("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[e].nodeName === "DIV"){
                          list_text_lamquen.push($("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[e].childNodes[3].textContent)
                        }
                      }
                      console.log(list_text_lamquen)
                      break;
                    case "box_item_danhvan":
                      for(let e =0;e<$("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes.length;e++){
                        if($("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[e].nodeName === "DIV"){
                          list_text_danhvan.push({
                            "text":$("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[e].childNodes[3].textContent,
                            "danhvan":$("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[e].childNodes[3].title
                          })
                        }
                      }
                      console.log(list_text_danhvan)
                      break;
                    case "box_item_kechuyen":
                      console.log($("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[2].childNodes[3].childNodes)
                      for(let e =0;e<$("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[2].childNodes[3].childNodes;e++){
                        if($("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[2].childNodes[3].childNodes[e].nodeName === "li"){
                          console.log($("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[2].childNodes[3].childNodes[e])
                          // list_text_kechuyen.push({
                          //   "text":$("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[e].childNodes[3].textContent,
                          //   "danhvan":$("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[e].childNodes[3].title
                          // })
                        }
                      }
                      break;
                    case "box_item_ontap":
                      for(let e =0;e<$("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes.length;e++){
                        if($("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[e].nodeName === "DIV"){
                          list_text_ontap.push({
                            "name":$("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[e].childNodes[1].textContent,
                            "text":$("#box_display_lesson")[0].childNodes[i].childNodes[3].childNodes[e].childNodes[5].textContent,
                          })                       
                        }
                      }
                      console.log(list_text_ontap)
                      break;
                    default:
                      break;
                  }
                }
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
      }
      break;
    case "DOCUMENT":
      break;
    default:
      console.log("no found");
      break;
  }
};
