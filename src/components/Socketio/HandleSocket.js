export const HandleSocket = (msg)=>{
  var count_next = 0
    switch (msg["task"]) {
        case "TexttoControllerWeb":
          switch (msg["place"]) {
            case "Home":
              break;
            case "Page_detect":
              break;
            case "Page_lesson":
              console.log(msg["content"])
              if(msg["content"] === "NEXT"){
                count_next = count_next + 1
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
              if(msg["content"] === "DETECT") window.location.replace('/Fontend_KHKT/Page_1')
              if(msg["content"] === "LESSON") window.location.replace('/Fontend_KHKT/Page_2')
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
              console.log(msg["content"]["text_detect"])
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
}