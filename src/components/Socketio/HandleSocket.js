export const HandleSocket = (msg)=>{
    switch (msg["task"]) {
        case "TextoControllerWeb":
          switch (msg["task"]) {
            case "Home":
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
        case "TextoControllerLinkWeb":
          switch (msg["task"]) {
            case "Home":
              if(msg["content"] === "DETECT") window.location.replace('/Page_1')
              if(msg["content"] === "LESSON") window.location.replace('/Page_2')
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
        case "TextoAlertWeb":
          switch (msg["task"]) {
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