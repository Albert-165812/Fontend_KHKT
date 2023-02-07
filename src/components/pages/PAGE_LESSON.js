import React, { useEffect} from "react";
import Nav from "../layouts/Nav/Nav";
import Lesson from "../Lesson/Lesson";
import "./page_lesson.css"
const PAGE_LESSON = () => {
  useEffect(()=>{
    console.log("hello")
  },[])
  return (
    <div className="page_lesson">
      {Nav("This is a page lesson")}
      <Lesson/>
    </div>
  );
};

export default PAGE_LESSON;
