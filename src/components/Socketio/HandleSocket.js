import $ from "jquery";
let page_curr = "";
var count_next = 0;
let state_choosen_lesson = false;
export const HandleSocket = (msg, socket, ids) => {
  if ($(".list_chuong")[0] === undefined) {
    state_choosen_lesson = false;
  } else {
    state_choosen_lesson = true;
  }
  const emit_local = (task, place, content) => {
    let data_msg = {
      task: task,
      place: place,
      content: content,
    };
    socket.emit("server_client_local", data_msg);
  };
  switch (msg["place"]) {
    case "HOME":
      switch (msg["task"]) {
        case "controlLinkWeb":
          switch (msg["task"]) {
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
      break;
    case "LESSONS":
      if (!state_choosen_lesson) {
        switch (msg["task"]) {
          case "controlChooseLessons":
            switch (msg["content"]) {
              case "NEXTCHOOSE":
                break;
              case "PREVCHOOSE":
                break;
              case "CHOOSE":
                break;
              default:
                break;
            }
          case "controlLinkWeb":
            switch (msg["content"]) {
              case "NEXTCHOOSE":
                break;
              case "PREVCHOOSE":
                break;
              case "CHOOSE":
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
