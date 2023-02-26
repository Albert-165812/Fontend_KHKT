import $ from "jquery";
import axios from "axios";
var count_next = 0;
let state_choosen_lesson = false;
export const HandleSocket = (msg, socket, ids) => {
  // if ($(".list_chuong")[0] === undefined) {
  //   state_choosen_lesson = false;
  // } else {
  //   state_choosen_lesson = true;
  // }
  const emit_page_curr = (task, place, content) => {
    let data_msg = {
      task: task,
      place: place,
      content: content,
    };
    console.log("page_curr; ",data_msg)
    // socket.emit("page_curr", data_msg);
  };
  switch (msg["place"]) {
    case "HOME":
      switch (msg["task"]) {
        case "controlLinkWeb":
          switch (msg["content"]) {
            case "DETECT":
              alert("controlLinkWeb")
              window.location.replace("/Fontend_KHKT/Page_1");
              emit_page_curr("alertPageCurr", "current", "DETECT");
              break;
            case "LESSONS":
              window.location.replace("/Fontend_KHKT/Page_2");
              emit_page_curr("alertPageCurr", "current", "LESSONS");
              break;
            case "DOCUMENT":
              window.location.replace("/Fontend_KHKT/Page_3");
              emit_page_curr("alertPageCurr", "current", "DOCUMENT");
              break;
            case "BACK":
              window.location.reload();
              emit_page_curr("alertPageCurr", "current", "HOME");
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
              emit_page_curr("alertPageCurr", "current", "DETECT");
              break;
            case "LESSONS":
              window.location.replace("/Fontend_KHKT/Page_2");
              emit_page_curr("alertPageCurr", "current", "LESSONS");
              break;
            case "DOCUMENT":
              window.location.replace("/Fontend_KHKT/Page_3");
              emit_page_curr("alertPageCurr", "current", "DOCUMENT");
              break;
            case "BACK":
              window.location.replace("/Fontend_KHKT/");
              emit_page_curr("alertPageCurr", "current", "HOME");
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
                console.log(count_next)
                break;
              case "PREVCHOOSE":
                if (count_next === 0) {
                  count_next = 0;
                } else count_next -= 1;
                break;
              case "CHOOSE":
                $(".btn_choose_lessons")[count_next].childNodes[0].click();
                state_choosen_lesson = true;
                axios.post("/state_choosen",{
                  "state": "done",
                })
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
          case "controlChooseLessons":
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
                break;
              default:
                break;
            }
            break;
          case "controlLinkWeb":
            switch (msg["content"]) {
              case "DETECT":
                window.location.replace("/Fontend_KHKT/Page_1");
                emit_page_curr("alertPageCurr", "current", "DETECT");
                break;
              case "LESSONS":
                window.location.reload();
                emit_page_curr("alertPageCurr", "current", "LESSONS");
                break;
              case "DOCUMENT":
                window.location.replace("/Fontend_KHKT/Page_3");
                emit_page_curr("alertPageCurr", "current", "DOCUMENT");
                break;
              case "BACK":
                window.location.replace("/Fontend_KHKT/");
                emit_page_curr("alertPageCurr", "current", "HOME");
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
