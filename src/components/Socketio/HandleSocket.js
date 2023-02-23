import $ from "jquery";
var count_next = 0;
var count_text = 0;
let state_choosen_lesson = false;
let state_curr_lesson = false;

export const HandleSocket = (msg, socket,ids) => {
  if($(".list_chuong")[0] === undefined){
    state_choosen_lesson = true;
    state_curr_lesson = true;
  }
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
              if(count_next >=ids[0].length-1){
                count_next = ids[0].length -1
              }
              else{
                count_next += 1;
              } 
            }
            if (msg["content"] === "BACK") {
              if(count_next === 0){
                count_next = 0;
              }
              else count_next -= 1;
            }
            if (msg["content"] === "E") {
              $(".btn_choose_lessons")[count_next].childNodes[0].click();
              state_choosen_lesson = true;
              state_curr_lesson = true
              count_next = 0;
            }
          }
          else if (state_curr_lesson) {
            if (msg["content"] === "NEXT") {
              $("#NEXT")[0].click();
            }
            if (msg["content"] === "BACK") {
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
          if (msg["content"] === "DETECT"){
            window.location.replace("/Fontend_KHKT/Page_1");
            count_next = 0
          }
          if (msg["content"] === "LESSONS"){
            window.location.replace("/Fontend_KHKT/Page_2");
            count_next = 0
          }
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
