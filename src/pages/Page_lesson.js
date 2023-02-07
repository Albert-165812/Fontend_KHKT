import React, { useEffect, useState } from "react";
import Nav from "../layouts/Nav";
import Lesson from "../components/Lesson";
const Page_lesson = () => {
  return (
    <div className="page_lesson">
      {Nav("This is a page lesson")}
      <Lesson/>
    </div>
  );
};

export default Page_lesson;
