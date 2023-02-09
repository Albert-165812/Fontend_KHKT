import axios from "axios"
import {TexttoSpeech} from "../TexttoSpeech/TexttoSpeech"
export const Post_axios = (adrr,title,content)=>{
    
}
export const Post_frame = (title,content)=>{
    axios.post('/face_detect', {
        "title":title,
        "data_base64": content,
      })
      .then(function (response) {
        if(response.data['text_detect'] !== null){
          if(response.data['text_detect'] !== "no detection"){
            console.log(response.data['text_detect'])
            TexttoSpeech(response.data['text_detect'])
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}