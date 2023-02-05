import axios from "axios"
import {TexttoSpeech} from "../components/TexttoSpeech"
export const Post_axios = (adrr,title,content)=>{
    
}
export const Post_frame = (title,content)=>{
    axios.post('/face_detect', {
        "title":title,
        "data_base64": content,
      })
      .then(function (response) {
        TexttoSpeech(response.data['text_detect'])
        console.log(response.data['text_detect'])
        return response.data['text_detect']
      })
      .catch(function (error) {
        console.log(error);
      });
}