import $ from "jquery";
export const HandleSocket = (msg, socket) => {
  var count_next = 0;
  let state_choosen_lesson = false;
  let state_curr_lesson = false;
  const emit_local = (task, place, content) => {
    let data_msg = {
      task: task,
      place: place,
      content: content,
    };
    socket.emit("server_client_local", data_msg);
  };
  switch (msg["task"]) {
    case "TexttoControllerWeb":
      switch (msg["place"]) {
        case "Home":
          break;
        case "Page_detect":
          break;
        case "Page_lesson":
          if (!state_choosen_lesson) {
            if (msg["content"] === "NEXT") {
              if (
                count_next >=
                $("#list_lesson_choosen")[0].childNodes.length - 1
              )
                count_next += 1;
            }
            if (msg["content"] === "ENTER") {
              console.log(msg["content"]);
              $("#list_lesson_choosen")[0].childNodes[
                count_next
              ].childNodes[0].click();
              state_choosen_lesson = true;
              emit_local(
                "TextoAlertWeb",
                "Page_lesson",
                "state_choosen_lesson_done"
              );
              count_next = 0;
            }
          }
          if (!state_curr_lesson) {
            if (msg["content"] === "NEXT") {
              if (
                count_next >=
                $("#list_lesson_choosen")[0].childNodes.length - 1
              )
                count_next = $("#list_lesson_choosen")[0].childNodes.length - 1;
              count_next += 1;
              $("#NEXT")[0].click();
            }
            if (msg["content"] === "BACK") {
              if (count_next <= 0) count_next = 0;
              count_next -= 1;
              $("#PREV")[0].click();
            }
          }
          break;
        case "Page_document":
          break;
        default:
          console.log("Unknown task");
      }
      break;
    case "TexttoControllerLinkWeb":
      switch (msg["place"]) {
        case "Home":
          if (msg["content"] === "DETECT")
            window.location.replace("/Fontend_KHKT/Page_1");
          if (msg["content"] === "LESSON")
            window.location.replace("/Fontend_KHKT/Page_2");
          break;
        case "Page_detect":
          break;
        case "Page_lesson":
          break;
        case "Page_document":
          break;
        default:
          console.log("Unknown task");
      }
      break;
    case "TexttoAlertWeb":
      switch (msg["place"]) {
        case "Home":
          break;
        case "Page_detect":
          console.log(msg["content"]["text_detect"]);
          break;
        case "Page_lesson":
          break;
        case "Page_document":
          break;
        default:
          console.log("Unknown task");
      }
      break;
    default:
      console.log("Unknown task");
  }
};
